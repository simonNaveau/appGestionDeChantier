import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEquipementPage } from './add-equipement';

@NgModule({
  declarations: [
    AddEquipementPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEquipementPage),
  ],
})
export class AddEquipementPageModule {}
