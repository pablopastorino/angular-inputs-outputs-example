import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  item = this.items[this.items.length - 1];
  currentItem = this.items[this.items.length - 1];
  lineThrough = new Array(this.items.length).fill('none');

  lastChanceItem = 'Beanbag';
  wishlist = ['Drone', 'Computer'];

  decorate(item: string) {
    const index = this.items.indexOf(item);
    const isDeleted = this.lineThrough[index] === 'line-through';
    this.lineThrough[index] = isDeleted ? 'none' : 'line-through';
  }

  delete(item: string) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.currentItem = this.items[this.items.length - 1];
  }

  selectItem(newItem: string): void {
    alert(newItem);
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    this.currentItem = newItem;
  }

  crossOffItem(item: string) {
    const index = this.items.indexOf(item);
    const isDeleted = this.lineThrough[index] === 'line-through';
    this.lineThrough[index] = isDeleted ? 'none' : 'line-through';
  }

  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
