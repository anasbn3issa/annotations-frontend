import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-add-label-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './add-label-form.component.html',
  styleUrl: './add-label-form.component.css'
})
export class AddLabelFormComponent {
  labelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.labelForm = this.fb.group({
      labelName: ['', Validators.required],
      labelColor : ['', Validators.required]
    });
  }


  onSubmit(): void {
    // Handle label submission logic here
    const labelName = this.labelForm.get('labelName')?.value;
    const labelColor = this.labelForm.get('labelColor')?.value;
    console.log('Submitted label:', labelName,labelColor);

    // Add your logic to send the label to the backend or update the UI
  }



}
