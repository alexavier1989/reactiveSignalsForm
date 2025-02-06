# ReactiveSignalsForm

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Project Objective

The objective of this project is to demonstrate the use of reactive forms in Angular using signals. The application allows adding items to a dynamic form and calculating the total value of the added items. This approach leverages Angular's capabilities to efficiently handle complex and reactive forms.

## Project Functionality

1. **Add Items**: The application allows adding new items to the dynamic form through the "Add Items" button. Each item has an identifier, a name, and a value.

2. **Form Validation**: The form fields are validated to ensure that the name and value are required.

3. **Total Value Calculation**: The application calculates and displays the total value of all added items in real-time, using signals to react to changes in the form.

4. **Custom Components**: The application uses custom components such as `CustomInputComponent` and `FormChildComponent` to handle data input and form structure.

This application is a practical example of how to use reactive forms in Angular to build dynamic and reactive applications. The example was based on a tutorial from the Gentleman Programming youtube channel.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
