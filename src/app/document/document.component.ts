import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Label {
  name: string;
  color: string;
}

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {

  @Input() lastClickedLabel: Label = {name:'', color:''}; // Input to receive the last clicked label from the parent
  @Input() text: string = '';
  selectionInfo: { selectedText: string, startPosition: number, endPosition: number } = {
    selectedText: '',
    startPosition: 0,
    endPosition: 0
  };


  onTextSelection(): void {
    const selection = window.getSelection();
    if (this.lastClickedLabel && selection) {
      if (selection.isCollapsed) {
        // Handle the case of a simple click (no text selection)
        console.log('Simple click detected.');
        // Do whatever you want for a simple click
      } else {
        // Expand the selection to cover the entire word
        selection.modify('extend', 'backward', 'word');
        selection.modify('extend', 'forward', 'word');

        this.selectionInfo.selectedText = selection.toString().trim();


        // using the min and max because if we start selecting from bottom to top then the start and end will be reversed
        const range = selection.getRangeAt(0);

        this.selectionInfo.startPosition = Math.min(range.startOffset, range.endOffset);
        this.selectionInfo.endPosition = Math.max(range.startOffset, range.endOffset);

        // Retrieve the selected label's color directly from the parent component
        const selectedLabelColor = this.lastClickedLabel.color;

        const selectedLabelElement = document.createElement('p');
        selectedLabelElement.textContent = this.lastClickedLabel.name;



        const span = document.createElement('span');
        span.style.backgroundColor = selectedLabelColor;

        span.appendChild(selectedLabelElement);
        range.surroundContents(span);


        console.log('Selection Info:', this.selectionInfo);
      }
    }
  }






}
