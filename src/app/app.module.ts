import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 

import {AppRoutingModule }from './app-routing.module'; 
import {AppComponent }from './app.component'; 
import {HomeComponent }from './home/home.component'; 
import {CarouselModule }from 'ngx-bootstrap'; 
import {GalleryComponent }from './gallery/gallery.component'; 

import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import


@NgModule( {
declarations:[
    AppComponent, 
HomeComponent, 
GalleryComponent
  ], 
imports:[
CarouselModule.forRoot(),  
ModalGalleryModule.forRoot(), 
BrowserModule, 
AppRoutingModule
  ], 
providers:[], 
bootstrap:[AppComponent]
})
export class AppModule {}
