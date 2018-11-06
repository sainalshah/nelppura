import { Component, OnInit } from '@angular/core';
import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images: Image[] = [
    new Image(0, {
      img: '../assets/nelppura1.jpg'
    }),
    new Image(1, {
      img: '../assets/cover1.jpg'
    }),
    new Image(2, {
      img: '../assets/cottage1.jpg'
    }),
    new Image(3, {
      img: '../assets/cottage2.jpg'
    })];

    customPlainGalleryRowConfig: PlainGalleryConfig = {
      strategy: PlainGalleryStrategy.CUSTOM,
      layout: new AdvancedLayout(-1, true)
    };

    openImageModalRow(image: Image) {
      console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
      const index: number = this.getCurrentIndexCustomLayout(image, this.images);
      this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
    }

    private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
      return image ? images.indexOf(image) : -1;
    }


  ngOnInit() {
  }

}
