import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial-info',
  templateUrl: './trial-info.component.html',
  styleUrls: ['./trial-info.component.scss']
})
export class TrialInfoComponent implements OnInit {

  phases = [
    {
      title: "Phase 0",
      body: " first step in human trials which focuses on absorption, distribution, metabolization and excretion of the study drug as well as the interaction of the drug with one’s body."
    },
    {
      title: "Phase 1",
      body: "Second step in human trials which focus on evaluating safe dosage ranges and any possible side effects. May not be able to identify all possible side effects due to the small group of people used for this phase."
    },
    {
      title: "Phase 2",
      body: "Third step in human trials which will focus on determining efficacy and to continue evaluating safety. A larger group is utilized for testing."
    },
    {
      title: "Phase 3",
      body: "Fourth step of human trials which utilizes a much larger group of people than the others in hopes to confirm efficacy and effectiveness. Also, monitors side effects and comparisons to commonly used treatments."
    },
    {
      title: "Phase 4",
      body: "This phase is conducted during the sales of the study drug and follows FDA approval.  It is used to further evaluate treatment benefits, risks and optimal use."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
