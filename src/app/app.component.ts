import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormChildComponent } from './form-child/form-child.component';
import { toSignal } from '@angular/core/rxjs-interop';

export interface ItemForm {
  id: FormControl<number>;
  name: FormControl<string>;
  value: FormControl<number>;
}

export type CustomFormGroup = FormGroup<ItemForm>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactiveSignalsForm';

  // form: FormGroup< {items: FormArray<CustomFormGroup>}>; //old way
  // constructor( private fb: FormBuilder){ //old way
  //   this.form = fb.group({
  //     items: fb.array<CustomFormGroup>([])
  //   });
  // }

  fb = inject(NonNullableFormBuilder);

  form: FormGroup< { items: FormArray<CustomFormGroup> }> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([])  
  })

  get items() {
    return this.form.controls.items
  }

  // items = signal(this.form.controls.items.controls)
  itemsChanged = toSignal(this.form.valueChanges);

 totalValue = computed(() => {
    const value = this.itemsChanged()?.items?.reduce((acc, item) => acc + (Number(item?.value) || 0) , 0);
    return value;
 })


  // constructor(){
  //   effect(() => {
  //     this.form.controls.items.valueChanges.subscribe(() => {
  //        this.items.set([...this.form.controls.items.controls]);
  //     })
  //   });
  // }
  
  addItem() {
    const itemId = this.items.length + 1;
    const itemForm = this.fb.group<ItemForm>({
      id: this.fb.control(itemId),
      name: this.fb.control('', {validators: Validators.required}),
      value: this.fb.control(0, {validators: Validators.required}),

    })
    this.form.controls.items.push(itemForm);
  }
 

}
