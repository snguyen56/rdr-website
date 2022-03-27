import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {

  photos = [
    { title: "Entrance", path: "../../assets/images/facilities/entrance.jpg" },
    { title: "Patient Room", path: "../../assets/images/facilities/Patient Room.jpg" },
    { title: "Overnight Room", path: "../../assets/images/facilities/RDR_Overnight_Room_1st_Floor.jpg" },
  ];

  sections = [
    {
      header: "Our Research Facility",
      subtitle: "We have over 10000 square feet of dedicated clinical research space.",
      body: "Our research pharmacy has a controlled mixing environment and storage for refrigerated and room-temperature\
      investigational IV or oral products. Several coordinators and a licensed pharmacist are available for both\
      open-label and randomized controlled studies. The research pharmacist compounds the drug within the same center as\
      the infusion room, minimizing the time between mixing and infusion."
    },
    {
      header: "CURRENT COLLABORATORS",
      subtitle: null,
      body: "RDR is committed to transforming clinical research in rare diseases by several mechanisms including working with\
      the patient(s), their families, communities, and patient advocacy groups. Additionally, our industry collaborators\
      are valuable allies in our mission to achieve common goals to bring new therapies to rare diseases community."
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
