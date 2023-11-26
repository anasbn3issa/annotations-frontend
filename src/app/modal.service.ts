import { Injectable } from '@angular/core';
import { AddLabelFormComponent } from './add-label-form/add-label-form.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {}

  openAddLabelModal(): void {
    const dialogRef = this.dialog.open(AddLabelFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
