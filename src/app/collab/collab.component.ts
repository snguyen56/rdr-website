import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {

  photos = [
    { title: "Entrance", path: "assets/images/facilities/entrance.jpg" },
    { title: "Patient Room", path: "assets/images/facilities/Patient Room.jpg" },
    { title: "Overnight Room", path: "assets/images/facilities/RDR_Overnight_Room_1st_Floor.jpg" },
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
    {
      image: "assets/images/sponsors/advarra.png",
      link: "https://www.advarra.com/"
    },
    {
      image: "assets/images/sponsors/biogen.png",
      link: "https://www.biogen.com/"
    },
    {
      image: "assets/images/sponsors/capricor.png",
      link: "https://capricor.com/"
    },
    {
      image: "assets/images/sponsors/catabasis.png",
      link: "https://astriatx.com/"
    },
    {
      image: "assets/images/sponsors/covance copy.png",
      link: "https://drugdevelopment.labcorp.com/"
    },
    {
      image: "assets/images/sponsors/fibro.png",
      link: "https://www.fibrogen.com/"
    },
    {
      image: "assets/images/sponsors/genentech (1).png",
      link: "https://www.gene.com/"
    },
    {
      image: "assets/images/sponsors/genetx (1).png",
      link: "https://www.genetxbio.com/about"
    },
    {
      image: "assets/images/sponsors/greenphire (1).png",
      link: "https://greenphire.com/"
    },
    {
      image: "assets/images/sponsors/icon.png",
      link: "https://www.iconplc.com/"
    },
    {
      image: "assets/images/sponsors/mallinckrodt.png",
      link: "https://www.mallinckrodt.com/"
    },
    {
      image: "assets/images/sponsors/medidata (1).png",
      link: "https://www.medidata.com/"
    },
    {
      image: "assets/images/sponsors/orion.png",
      link: "http://www.orion.fi/"
    },
    {
      image: "assets/images/sponsors/ovid.png",
      link: "https://ovidrx.com/"
    },
    {
      image: "assets/images/sponsors/paraxel.png",
      link: "http://www.parexel.com/"
    },
    {
      image: "assets/images/sponsors/pms.png",
      link: "https://www.bms.com/"
    },
    {
      image: "assets/images/sponsors/ppd.png",
      link: "https://www.ppd.com/"
    },
    {
      image: "assets/images/sponsors/pra.png",
      link: "https://www.iconplc.com/"
    },
    {
      image: "assets/images/sponsors/ptc (2).png",
      link: "https://www.ptcbio.com/"
    },
    {
      image: "assets/images/sponsors/q2solutions.png",
      link: "https://www.q2labsolutions.com/"
    },
    {
      image: "assets/images/sponsors/rare-partners-group (1).png",
      link: "http://rarepartnersgroup.com/"
    },
    {
      image: "assets/images/sponsors/roche.png",
      link: "https://www.roche.com/"
    },
    {
      image: "assets/images/sponsors/santhera.png",
      link: "https://www.santhera.com/"
    },
    {
      image: "assets/images/sponsors/sarepta (1).png",
      link: "https://www.sarepta.com/"
    },
    {
      image: "assets/images/sponsors/shirw.png",
      link: "https://www.shire.com/"
    },
    {
      image: "assets/images/sponsors/stealhealth.png",
      link: "https://www.stealthbt.com/"
    },
    {
      image: "assets/images/sponsors/syneos.png",
      link: "https://www.syneoshealth.com/our-company"
    },
    {
      image: "assets/images/sponsors/takeda.png",
      link: "https://www.takeda.com/"
    },
    {
      image: "assets/images/sponsors/vitalograph (1).png",
      link: "https://vitalograph.com/"
    },
    {
      image: "assets/images/sponsors/wave (1).png",
      link: "http://www.wavelifesciences.com/"
    },
    {
      image: "assets/images/sponsors/wirb copy.png",
      link: "https://www.wirb.com/Pages/Default.aspx"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
