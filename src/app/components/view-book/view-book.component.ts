import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetBookService } from '../../services/get-book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  public book:Book = new Book();
  public bookId: number;

  constructor(private getBookService: GetBookService, private router: Router, private route:ActivatedRoute) { }

 onSelect(book:Book) {
    this.router.navigate(['/editBook', this.book.id]);
  }


  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.bookId = Number.parseInt(params['id']);
  	});
  	this.getBookService.getBook(this.bookId).subscribe(
  		res => {
  			this.book = res.json();
  		},
  		error => {
  			console.log(error);
  		}
     );
  }

}
