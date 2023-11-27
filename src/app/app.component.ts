import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelsListComponent } from './labels-list/labels-list.component';
import { DocumentComponent } from './document/document.component';
import { AddLabelFormComponent } from './add-label-form/add-label-form.component';
import { Label } from './interfaces/label';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LabelsListComponent, DocumentComponent, AddLabelFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'annotationsFrontend';
  lastClickedLabel: Label = {name:'', color:''};


  handleLabelClicked(label: Label): void {
    this.lastClickedLabel = label;
  }



}
