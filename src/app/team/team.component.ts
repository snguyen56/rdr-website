import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  leaders = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Han Phan",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Tim Nguyen",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Trang Vo",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  nurses = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Lindsay Pare",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Meg Hudspeth",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Kallie Platt",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Genevieve Wilson",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  clinic = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Marcial Almaraz",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Deanna Baker",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jona Comix",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Brenda Almaras",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Lisa Glasford",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Ibaad Khan",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Christian Hanson",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Amber Rayo",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Donna Spaulding",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jessica Williams",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  admin = [
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jennifer Griffin",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Jessica Drury",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Steven Nguyen",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Alvin Nguyen",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Olga Tenyuta",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
      name: "Miro Pastrnak",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
