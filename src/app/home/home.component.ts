import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trials = [
    {
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },{
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },{
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },{
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },{
      img: null,
      name: "Header",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
