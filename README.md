## Angular 16 - eKart

### Contents:

1. Angular CLI Commands
2. Angular Concepts

---

## 1. Angular CLI Commands

### Installation

To set up Angular development environment, you need to install Angular CLI globally:

```bash
npm install -g @angular/cli@latest
```

### Creating a New Project

Generate a new Angular project with Angular CLI:

```bash
ng new my-app
```

### Running the Project

Run your Angular project locally using:

```bash
ng serve
```

This command compiles your application and starts a development server.

### Building the Project

Build your Angular project for production using:

```bash
ng build
```

### Installing Bootstrap

To include Bootstrap in your Angular project, install it with npm:

```bash
npm install bootstrap --save
```

### Generating Components

Angular CLI simplifies component creation:

```bash
ng generate component component-name
```

or

```bash
ng g c component-name
```

---

## 2. Angular Concepts

### Data Binding

- **String Interpolation**: `{{ data }}`
- **Property Binding**: `[property]="data"` or `bind-property="data"`

  **Example**:

  ```html
  <img [src]="imagePath" />
  ```

- **Event Binding**: `(event)="expression"`

  **Example**:

  ```html
  <button (click)="onButtonClick()">Click me!</button>
  ```

- **Two-Way Binding**: `[(ngModel)]="data"` or `[prop]="data" (Click)="propChange($event)"`

  **Example**:

  ```html
  <input [(ngModel)]="username" />
  ```

### Directives

- **Component Directives**: Add a component to the DOM.
- **Attribute Directives**: Change the appearance or behavior of an element, component, or another directive.
- **Structural Directives**: Change the structure of the DOM by adding or removing elements.

  **Example**:

  ```html
  <div *ngIf="isVisible">Visible content</div>
  ```

### Communication Between Components

- **From Parent to Child**: Use `@Input()` decorator.

  **Example**:

  ```typescript
  @Input() item: string;
  ```

- **From Child to Parent**: Use `@Output()` decorator and EventEmitter.

  **Example**:

  ```typescript
  @Output() newItemEvent = new EventEmitter<string>();
  ```

### Template Reference Variables

Template reference variables store references to DOM elements, components, or directives, allowing access in the template.

**Example**:

```html
<input #myInput type="text" />
```

### ViewChild and ViewChildren Decorators

- **ViewChild**: Provides access to the first matching element, component, or directive with a template reference variable.
- **ViewChildren**: Provides access to multiple matching elements, components, or directives with a template reference variable.

  **Example**:

  ```typescript
  @ViewChild('myInput') myInput: ElementRef;
  ```

### ng-template

- Used for defining templates.
- Content can be conditionally rendered using `*ngIf` or projected using `ng-content`.

  **Example**:

  ```html
  <ng-template #templateRef>
    <h2>Template Reference</h2>
  </ng-template>
  ```

### ng-container

- A non-rendered element used to group elements together.
- Does not interfere with styles or layout.

  **Example**:

  ```html
  <ng-container *ngFor="let item of items">{{ item }}</ng-container>
  ```

### ng-content

- Projects content from the parent component to the child component.
- Allows for flexible component design and content projection.

  **Example**:

  ```html
  <app-child>
    <h2 class="heading">Hello</h2>
  </app-child>
  ```

  In the child component:

  ```html
  <ng-content select=".heading"></ng-content>
  ```
