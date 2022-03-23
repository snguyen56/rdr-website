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
      name: "Duchenne Muscular Dystrophy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Spinal Muscular Atrophy (SMA)",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Pediatric Epilepsy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Metachromatic Leukodystrophy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Angelman Syndrome",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Fragile X Syndrome",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "CDKL5 Deficiency Disorder",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Excessive Daytime Sleepiness in Patients with Myotonic Dystrophy Type I",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Prader-Willi Syndrome",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Galactosemia",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Becker Muscular Dystrophy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Mitochondrial Myopathy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Glycogen Storage Disorder Type 3",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Epidiolex Side Effects Liver",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
    {
      img: null,
      name: "Epilepsy",
      text: "Some quick example text to build on the card title and make up the bulk of the\
      card's content."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
