import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal.service';
import { LabelService } from '../label.service';
import { Label } from '../interfaces/label';
import { MatDialog } from '@angular/material/dialog';
import { AddLabelFormComponent } from '../add-label-form/add-label-form.component';
import { GeneralService } from '../general.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-labels-list',
  standalone: true,
  imports: [CommonModule ,MatButtonModule],
  templateUrl: './labels-list.component.html',
  styleUrl: './labels-list.component.css'
})
export class LabelsListComponent {
  constructor(private modalService: ModalService, private labelService: LabelService, private generalService: GeneralService ,  private dialog: MatDialog) {}

  labels: Label[] = [];
  colorsList : String[] = ["red","blue", "yellow", "aqua"];
  @Output() labelClicked: EventEmitter<Label> = new EventEmitter<Label>();

  ngOnInit(): void {
    this.loadLabels();
  }



  onLabelClick(label: Label): void {
    this.labelClicked.emit(label);
  }

  openAddLabelModal(): void {
    const dialogRef = this.dialog.open(AddLabelFormComponent, {
      width: '350px',
      height: '220px'
      // Add any other configurations for your modal
    });

    dialogRef.afterClosed().subscribe(() => {
      // Reload labels when the modal is closed
      this.loadLabels();
    });
  }

  loadLabels(): void {
    this.labelService.getLabels().subscribe((response) => {
      this.labels = response.map((label, index) => ({
        ...label,
        color: this.colorsList[index % this.colorsList.length],
      }));
      console.log('Labels loaded successfully:', this.labels);
    });
  }

  clearDatabase(): void {
    this.generalService.clearDatabase().subscribe(
      (response) => {
        console.log('Database cleared successfully:', response);
      },
      (error) => {
        console.error('Error clearing database:', error);
      }
    );
  }



}
