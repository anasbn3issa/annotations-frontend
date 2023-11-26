import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal.service';
import { LabelService } from '../label.service';
import { Label } from '../interfaces/label';
import { MatDialog } from '@angular/material/dialog';
import { AddLabelFormComponent } from '../add-label-form/add-label-form.component';

@Component({
  selector: 'app-labels-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-list.component.html',
  styleUrl: './labels-list.component.css'
})
export class LabelsListComponent {
  constructor(private modalService: ModalService, private labelService: LabelService,private dialog: MatDialog) {}

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
      width: '300px',
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




}
