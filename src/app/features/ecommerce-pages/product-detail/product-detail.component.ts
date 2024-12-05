import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @ViewChild('imgShowcase', { static: true }) imgShowcase!: ElementRef<HTMLDivElement>;

  // Define an array of image URLs
  images: string[] = [
    'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg',
    'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg',
    'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg',
    'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg'
  ];

  imgId: number = 1;

  // Method triggered on thumbnail click
  onImageClick(event: Event, id: number): void {
    event.preventDefault();
    this.imgId = id;
    this.slideImage();
  }

  // Slide image based on selected imgId
  slideImage(): void {
    const displayWidth = this.imgShowcase.nativeElement.querySelector('img')?.clientWidth || 0;
    this.imgShowcase.nativeElement.style.transform = `translateX(${-(this.imgId - 1) * displayWidth}px)`;
  }

  // Recalculate slide position on window resize
  @HostListener('window:resize')
  onResize(): void {
    this.slideImage();
  }

}
