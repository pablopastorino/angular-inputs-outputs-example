import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  @Input() items: string[] = [];
  @Output() deleteRequest = new EventEmitter<string>();

  delete(item: string) {
    this.deleteRequest.emit(item);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
