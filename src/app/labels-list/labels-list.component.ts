import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal.service';

interface Label {
  text: string;
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
  constructor(private modalService: ModalService) {}

  @Input() labels: Label[] = [];
  @Output() labelClicked: EventEmitter<Label> = new EventEmitter<Label>();


  onLabelClick(label: Label): void {
    this.labelClicked.emit(label);
  }

  openAddLabelModal(): void {
    this.modalService.openAddLabelModal();
  }

}
