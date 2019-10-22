import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEmployePage } from './add-employe';

@NgModule({
  declarations: [
    AddEmployePage,
  ],
  imports: [
    IonicPageModule.forChild(AddEmployePage),
  ],
})
export class AddEmployePageModule {}
