# To install Angular CLI globally
npm i -g @angular/cli@latest

# To create a new Angular project
ng new my-app

# To run the Angular project
ng serve 
this command will compile and bundle the application and start the server

# To build the Angular project
ng build

# install bootstrap
npm install bootstrap --save

# create complete component from CLI
    ng generate component component-name
    ng g c component-name


# string interpolation
    {{ data }}

# property binding
    [property]="data"
or  bind-property="data"

example : <img [src]="imagePath">
          <img bind-src="imagePath">


# event binding
    (event)="expression"

# Two way binding
    [(ngModel)]="data"
or [prop]="data" (Click)="propChange($event)"

# Directives
1- component directive : add a component to the DOM
    for example <app-root></app-root>
    
2- attribute directive : change the appearance or behavior of an element, component, or another directive
    for example ngStyle, ngClass
    [ngStyle]="{color: isGreen ? 'green' : 'red'}"

3- structural directive: change the structure of the DOM by adding or removing elements 
   for example *ngIf, *ngFor

# Communication between components
1- from parent to child
in the class of the child component we decorate the property with @Input() decorator
    @Input() 
    item: string;

in the html of the parent component we pass the data to the child component
    <app-child *ngFor="let item of items" [item]="item"></app-child>
or 
    <app-child item="item"></app-child>

the items is an array of strings in the class of the parent component for example

2- from child to parent via event binding
in the class of the child component we decorate the property with @Output() decorator
    @Output() 
    newItemEvent = new EventEmitter<string>();

onEvent() {
    this.newItemEvent.emit(this.item);
}

so the parent component can listen to the event newItemEvent and can receive 
the emitted data from the child component like this :
    <app-child (newItemEvent)="addItem($event)"></app-child>

and in the class of the parent component we can define the addItem method to receive the emitted data from the child component
    addItem(newItem: string) {
        this.items.push(newItem);
    }


# Template reference variables
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>

    logMessage(value) {
        console.log(value);
    }
it stores to a DOM element a component or a directive on which we have defined it 
and we can access it in the template


# viewChild decorator
    @ViewChild('myInput'): will give us access to the DOM element or the component or the directive which have a template reference variable
    called myInput (#myInput) it returns the first element that matches the selector

The view child allows us to access the DOM element without the need of waiting of an event to be triggered

# viewChildren decorator
    @ViewChildren('myInput'): will give us access to the DOM elements or the components or the directives which 
    have a template reference variable
    called myInput (#myInput) it returns a QueryList of elements that matches the selector
    it has only one optional parameter( read: boolean) which is false by default.
    the elements will be initialized only when a change detection cycle is triggered unlike the viewChild
    where we have the static flag to choice when we want the element to be initialized

# ng-template

    <ng-template #templateRef>
        <h2>Template Reference</h2>
    </ng-template>

    <div *ngIf="display; then templateRef else elseBlock"></div>

    <ng-template #elseBlock>
        <h2>Else Block</h2>
    </ng-template>

    the whole div will be replaced by the content of one of the ng-template based on the condition

# ng-container
    it is a grouping element that doesn't interfere with the styles or layout of the page
    it is used to group elements together and apply structural directives to them
    it is not rendered in the DOM

# ng-content : it is used to project the content of the parent component to the child component
    <app-child>
        <h2 class="heading">Hello</h2>
    </app-child>

    in the child component
        <ng-content select=".heading"></ng-content>
    it will project the h2 element with the class heading to the child component
    

# @ContentChild decorator
    it is used to access the content being projected from the parent component to the child component
 in the parent component
    <app-child>
        <div #contentRef>
            <h2 class="heading">Hello</h2>
        </div>
    </app-child>
so in the child component we can access the contentRef using the @ContentChild decorator
   @ContentChild('contentRef') contentRef: ElementRef;
we can't access them using the @ViewChild decorator because the content is projected from the parent component to the child component
but from the parent component we can access the projected content using the @ViewChild decorator

# ContentChildren decorator
    it is used to access the content being projected from the parent component to the child component
    it returns a QueryList of elements that matches the selector
    it works the same way as the @ContentChild decorator but it returns a QueryList of elements that matches the selector


### Lifecycle Hooks in Angular

# Component Initialization
1- by the time the constructor is called the attributes has only the initial values
  and they if they receive a new value from the parent component the updated value will not be 
  available in the constructor, the same for projected content. so we can say that when the constructor
  is called only an instance of the component is created and the attributes are initialized with the initial values.

2- when a component is removed from the DOM we say that it is destroyed

The lifecycle of an Angular application revolves around the creation, rendering, updating, and destruction of components.

1. Root Component Creation:
When the Angular application starts, it creates and renders the root component defined in the AppModule.
This root component serves as the entry point to the application and represents the top-level structure.

2.Component Tree Formation:
After rendering the root component, Angular proceeds to create and render its child components, and their subsequent children.
This hierarchical structure forms a tree of components, where each component encapsulates specific functionality or UI elements.

3.Rendering the View:
Once Angular loads a component, it initiates the process of rendering its associated view.
This involves checking input properties, evaluating data bindings and expressions, rendering projected content, and handling events.

4.Lifecycle Hooks:
Angular provides lifecycle hooks, which are methods that allow developers to tap into various stages of a component's lifecycle.
These hooks enable developers to execute custom logic or perform tasks at specific points in the component's lifecycle.
Some commonly used lifecycle hooks include ngOnInit, ngOnChanges, ngAfterViewInit, ngOnDestroy, etc.

5.Component Removal from DOM:
Angular also manages the removal of components from the DOM when they are no longer needed.
This occurs when components are destroyed either explicitly or due to changes in the application state.

6.Event Notification:
Angular informs developers about these lifecycle events, providing visibility into the component's lifecycle.
Developers can leverage these notifications to perform cleanup tasks, manage resources, or trigger additional behavior as needed.

and developers can tap into these lifecycle events to perform custom logic or tasks at specific points in the component's lifecycle.
the hooks are : 
    ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

1- ngOnChanges:
    it is called when an input property of the component initialized for the first time.
    it is called when the input property of the component changes.
    it accepts an object of type SimpleChanges which contains the previous and the current value of the input property.
    it will not be called if the input property is not changed.
    if it has no input properties it will not be called.
    if we passed a reference type to the input property and we change the property of the object it will not be called because 
    the reference is not changed.
 
2- ngOnInit:(only once)
    it is called after ngOnChanges.
    it is called only once, after the initialization of the component (initializing the input properties)
    it is called even if the component has no input properties.(unlike ngOnChanges)
    by the time it is called non of the viewChild or viewContent are initialized and the view is not rendered yet.
    the best place for any initialization logic.

3- ngDoCheck:
    it is called after the ngOnInit.
    it is called after every change detection cycle even if nothing has changed.
    use it to implement your own change detection logic whenever a change detection cycle is triggered.

4- ngAfterContentInit:(only once) (only for components not for directives)
    it is called after the ngDoCheck.
    it is called after the projected content is initialized and only once.
    even if we don't have projected content it will be called.
    angular updates the props decorated with @ContentChild and @ContentChildren just before calling this hook.

5- ngAfterContentChecked:(only for components not for directives)
    it is called after every change detection cycle even if nothing has changed or there is no projected content.
   - the  difference between it and ngDoCheck is that it is called after the projected content is checked, so before the projected content is checked ngDoCheck is irreplaceable,
    also if we want to compare the previous and the current value of the projected we can do it only with ngAfterContentChecked.
   - just before calling this hook angular updates the props decorated with @ContentChild and @ContentChildren.

6- ngAfterViewInit:(only once) (only for components not for directives)
    it is called only once when the component view and all its children used in the view are initialized.
    angular updates the props decorated with @ViewChild and @ViewChildren just before calling this hook.
   - by the time this hook get's called for a component, all the lifecycle hook methods of child components 
     and directives are completely processed and child components are completely ready.

7- ngAfterViewChecked:(only for components not for directives)
    it is called after every change detection cycle, also whenever the view of the component or its children changes, or even if nothing has changed.
    just before calling this hook angular updates the props decorated with @ViewChild and @ViewChildren.
    @ViewChild and @viewContent will be available in this hook.
   - if we want to compare the previous and the current value of the view we can do it only with ngAfterViewChecked.

8- ngOnDestroy:
    it is called just before the component is destroyed.
    it is called when the component is removed from the DOM.
    it is a great place to do any cleanup logic, like unsubscribing from observables, or removing event listeners.
    it's the last lifecycle hook to be called before the component&directive is destroyed.



# Custom Attribute Directives:
 Renderer2 : when creating a custom directive its not recommended to manipulate the DOM directly, instead 
    we should use the Renderer2 service which is a better way to manipulate the DOM, to prevent any security issues(like XSS attacks)
    and also to make the application more portable(web workers, server-side rendering, etc)
    and to do not stole the component based architecture of Angular.

 @HostListener : it is used to listen to the events of the host element of the directive.
 ex : @HostListener('mouseenter') mouseover(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
we can pass optional args as string to host listener function for example 
 @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    console.log('Input value:', value);
  }

@HostBinding : it is used to bind props of the directive in the host element of the directive.
ex : @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
so the backgroundColor of the host element will be transparent by default.

# Property Binding in Directives: we can bind the properties to the directive using the @Input decorator and then pass the value to the directive
via the host element of the directive like this
    <p appBasicHighlight [highlightColor]="'yellow'">Styled with yellow</p>
also if we have a single input property we can use the selector of the directive as a alias for the input property
    @Input('appBasicHighlight') highlightColor: string = 'transparent';
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.highlightColor);

so we can use the directive like this
    <p [appBasicHighlight]="'yellow'">Style me with yellow</p>

Imagine that the prop we want to bind to the directive exists also in the component of the host element of the directive, In this 
angular will try to bind the prop to the directive and if it doesn't find it in the directive it will look for it in the component.
    


# Simulation of ngClass with an ngCustomClass
the diff that always we receive a bool value (true or false) indicating if the class should be added or removed

we will receive an object from the host element like this 
<app [ngCustomClass]="{'class1':7>3,'class2':...}" />

import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngCustomClass]'
})
export class NgCustomClassDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('ngCustomClass') set display(classList:Object) {
    if (classList) {
      for (const [className, condition] of Object.entries(classList)) {
        if (condition) {
          this.renderer.addClass(this.elementRef.nativeElement, className);
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        }
      }
    }
  }
}

# Simulation of ngStyle directive
the diff that always we will receive the cssProp and its value cause the condition will give us the value of the cssProp

import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngCustomStyle]'
})
export class NgCustomStyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('ngCustomStyle') set style(styles:Object) {
    if (styles) {
      for (const [property, value] of Object.entries(styles)) {
        this.renderer.setStyle(this.elementRef.nativeElement, property, value);
      }
    }
  }
}


# Custom Structural directives:

 - How angular uses them behind the seen.
 ![alt text](/images/Structural_directive_behind_the_seen.png)


# Simulation of Custom *ngIf derictive
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngCustomIf]'
})

export class NgCustomIfDirective {
  constructor(private view: TemplateRef<any>, private template: ViewContainerRef) {}

    @Input() set ngCustomIf(condition: boolean) {
        if (condition) {
        this.template.createEmbeddedView(this.view);
        } else {
        this.template.clear();
        }
    }
}

in the app component
<div ngCustomIf="someCondition">
    <p>Some text</p>
</div>

- the set allows us to handle a property as a method so we can execute some logic whenever the property is changed.


# ng switch
    <div [ngSwitch]="value">
        <p *ngSwitchCase="service">Service</p>
        <p *ngSwitchCase="component">Component</p>
        <p *ngSwitchDefault>Default</p>
    </div>




