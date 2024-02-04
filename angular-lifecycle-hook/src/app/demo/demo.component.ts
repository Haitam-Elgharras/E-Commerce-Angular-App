import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ViewChild,
  ElementRef,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges {
  @Input() message: string[] = [];
  @ContentChild('temp') tmp: ElementRef | undefined;
  @ViewChild('tempref') tempref: ElementRef | undefined;

  constructor() {
    console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }

  // ngOnInit() {
  //   console.log('ngOnInit Hook called');
  //   //console.log(this.tempref.nativeElement.innerHTML);
  // }

  ngDoCheck() {
    console.log('ngDoCheck Hook called');
    //console.log('In ngDoCheck', this.paraContent)
  }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit Hook called');

  //   //console.log('In ngAfterContentInit', this.paraContent.nativeElement)
  // }

  ngAfterContentChecked(s: SimpleChanges) {
    console.log(
      'ngAfterContentChecked Hook called',
      this.tmp?.nativeElement,
      this.tempref?.nativeElement
    );
    //console.log('In ngAfterContentChecked', this.tempref);
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit Hook called');
  //   //console.log('In ngAfterViewInit', this.tempref);
  // }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook called', this.tempref?.nativeElement);
    //console.log(this.tempref.nativeElement.textContent);
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy Hook called');
  // }
}
