import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelsListComponent } from './labels-list/labels-list.component';
import { DocumentComponent } from './document/document.component';
import { AddLabelFormComponent } from './add-label-form/add-label-form.component';

interface Label {
  text: string;
  color: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LabelsListComponent, DocumentComponent, AddLabelFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'annotationsFrontend';
  lastClickedLabel: Label = {text:'', color:''};
  labels = [
    { text: 'Label1', color: '#FF5733' },
    { text: 'Label2', color: '#33FF57' },
    { text: 'Label3', color: '#5733FF' },
    { text: 'Label4', color: '#FF5733' }
  ];


  handleLabelClicked(label: Label): void {
    this.lastClickedLabel = label;
  }



}
