import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  info = [
    {
      title: "What is a clinical trial?",
      body: "A clinical trial is research studies to determine whether an experimental drug, device or treatment is beneficial to the advancement or improvement of patient care."
  },
  {
    title: "Who can participate in a clinical trial?",
    body: "There is an opportunity for anyone to participate in a clinical trial that meets the criteria."
  },
  {
    title: "Why is it important to participate in a clinical trial?",
    body: "Clinical Trials are necessary in the step to discovering new medical treatments."
  },
  {
    title: "How do I prepare for participation in a clinical trial?",
    body: "The Clinical Research Coordinator will provide you with guidelines specified in the protocol to help maintain participation in the clinical study."
  },
  {
    title: "Where can I find a clinical trial that fits my needs?",
    body: "There are several websites that you may access that will list clinical trials available in your area such as Clinicaltrials.gov"
  },
  {
    title: "What are my responsibilities if I am enrolled into a clinical trial?",
    body: "It is important to adhere to the guidelines set forth in the protocol. These guidelines will be discussed with you by the Principle Investigator and Clinical Research Coordinator; who are responsible for conducting the clinical trials."
  },
  {
    title: "What if I decide I don’t want to participate anymore?",
    body: "If you decide that you no longer want to participate in a clinical trial, you simply inform the research team and they will discuss the process of withdrawing consent"
  },
  {
    title: "Will my insurance be billed for my participation in a trial?",
    body: "Your insurance should never be billed for study-related assessments."
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
