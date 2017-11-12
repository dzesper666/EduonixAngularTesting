import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../models/book/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:BookModel;
  constructor() { }

  ngOnInit() {
  }

  votesCounter() {
    return this.book.upvotes;
  }

  upvote() {
    return this.book.upvotes++;
  }
}
