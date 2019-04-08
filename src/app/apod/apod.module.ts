import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApodPage } from './apod.page';

import { SafePipeModule } from 'safe-pipe';        //to display videos

const routes: Routes = [
  {
    path: '',
    component: ApodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApodPage]
})
export class ApodPageModule {}
