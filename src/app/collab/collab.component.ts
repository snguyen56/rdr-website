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
      subtitle: "We have over 10,000 square feet of dedicated clinical research space.",
      body: "Our research pharmacy has a controlled mixing environment and storage for refrigerated and room-temperature\
      investigational IV or oral products. Several coordinators and a licensed pharmacist are available for both\
      open-label and randomized controlled studies. The research pharmacist compounds the drug within the same center as\
      the infusion room, minimizing the time between mixing and infusion."
    },
    {
      header: "Current Collaborators",
      subtitle: null,
      body: "RDR is committed to transforming clinical research in rare diseases by several mechanisms including working with\
      the patient(s), their families, communities, and patient advocacy groups. Additionally, our industry collaborators\
      are valuable allies in our mission to achieve common goals to bring new therapies to rare diseases community."
    },
  ];

  sponsors = [
    "../../assets/images/sponsors/advarra.png",
    "../../assets/images/sponsors/biogen.png",
    "../../assets/images/sponsors/capricor.png",
    "../../assets/images/sponsors/catabasis.png",
    "../../assets/images/sponsors/covance copy.png",
    "../../assets/images/sponsors/fibro.png",
    "../../assets/images/sponsors/genentech (1).png",
    "../../assets/images/sponsors/genetx (1).png",
    "../../assets/images/sponsors/greenphire (1).png",
    "../../assets/images/sponsors/icon.png",
    "../../assets/images/sponsors/mallinckrodt.png",
    "../../assets/images/sponsors/medidata (1).png",
    "../../assets/images/sponsors/orion.png",
    "../../assets/images/sponsors/ovid.png",
    "../../assets/images/sponsors/paraxel.png",
    "../../assets/images/sponsors/pms.png",
    "../../assets/images/sponsors/ppd.png",
    "../../assets/images/sponsors/pra.png",
    "../../assets/images/sponsors/ptc (2).png",
    "../../assets/images/sponsors/q2solutions.png",
    "../../assets/images/sponsors/rare-partners-group (1).png",
    "../../assets/images/sponsors/roche.png",
    "../../assets/images/sponsors/santhera.png",
    "../../assets/images/sponsors/sarepta (1).png",
    "../../assets/images/sponsors/shirw.png",
    "../../assets/images/sponsors/stealhealth.png",
    "../../assets/images/sponsors/syneos.png",
    "../../assets/images/sponsors/takeda.png",
    "../../assets/images/sponsors/vitalograph (1).png",
    "../../assets/images/sponsors/wave (1).png",
    "../../assets/images/sponsors/wirb copy.png",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
