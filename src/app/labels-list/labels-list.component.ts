import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal.service';
import { LabelService } from '../label.service';


interface Label {
  name: string;
  color: string;
}

@Component({
  selector: 'app-labels-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-list.component.html',
  styleUrl: './labels-list.component.css'
})
export class LabelsListComponent {
  constructor(private modalService: ModalService, private labelService: LabelService) {}

  labels: Label[] = [];
  @Output() labelClicked: EventEmitter<Label> = new EventEmitter<Label>();

  ngOnInit(): void {
    this.loadLabels();
  }



  onLabelClick(label: Label): void {
    this.labelClicked.emit(label);
  }

  openAddLabelModal(): void {
    this.modalService.openAddLabelModal();
  }

  loadLabels(): void {
    this.labelService.getLabels().subscribe((response) => {
      this.labels = response;
      console.log('Labels loaded successfully:', this.labels);
    });
  }



}
