import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isExpanded: Boolean = false;
  buttonText: String = "Read More";

  @Input() card!: any;
  @Input() button: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
    this.buttonText == "Read More"?this.buttonText = "Show Less":this.buttonText = "Read More";
  }

}
