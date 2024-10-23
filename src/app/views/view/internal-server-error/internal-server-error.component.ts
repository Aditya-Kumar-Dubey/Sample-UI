import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss'
})
export class InternalServerErrorComponent implements AfterViewInit {


  @ViewChild('loadingDiv') loadingDiv!: ElementRef;

  constructor(private renderer: Renderer2) {
 
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.loadingDiv.nativeElement, 'loading');
    }, 1000);
  }


}
