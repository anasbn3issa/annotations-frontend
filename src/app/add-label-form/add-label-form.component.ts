import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LabelService } from '../label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';





@Component({
  selector: 'app-add-label-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './add-label-form.component.html',
  styleUrl: './add-label-form.component.css'
})
export class AddLabelFormComponent {
  labelForm : FormGroup;
  isLoading : boolean = false;

  constructor(private fb: FormBuilder,private labelService: LabelService,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<AddLabelFormComponent>) {
    this.labelForm = this.fb.group({
      labelName: ['', Validators.required],
      labelColor : ['', Validators.required]
    });
  }

  onSubmit(): void  {
    if (this.labelForm.invalid || this.isLoading) {
      // Form is not valid or already in a loading state, handle accordingly
      return;
    }

    const labelName = this.labelForm.get('labelName')?.value;
    const labelColor = this.labelForm.get('labelColor')?.value;

    this.isLoading = true;

    // Call the LabelService to add the label using finalize
    this.labelService.addLabel(labelName, labelColor).subscribe(
      (response) => {
        console.log('Label added successfully:', response);
        this.snackBar.open('Label added successfully', 'Close', { duration: 2000 });
        this.labelForm.reset();
        this.dialogRef.close();

      },
      (error) => {
        console.error('Error adding label:', error);
        this.snackBar.open('Error adding label', 'Close', { duration: 2000 });
        // Handle error, display error message, etc.
      }
    );
  }




}
