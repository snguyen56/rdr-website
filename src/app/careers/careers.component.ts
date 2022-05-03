import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  selectedFile: File = null as any;

  jobs = [
    {
      title: "Clinical Research Coordinator I",
      description: "Coordinates scheduling of patients for their studies (visits, physical therapy, MRIs, specialist appointments, follow-ups, etc.)",
      duties: [
        "Coordinates scheduling of patients for their studies (visits, physical therapy, MRIs, specialist appointments, follow-ups, etc.)",
        "Completes timely data entry, clearing of queries, and participant reimbursements",
        "Coordinates with Clinical Research Associate (CRA)/monitor for scheduling interim monitoring visits",
        "Documents notes to file (NTFs) and/or protocol deviations appropriately",
        "Orders and stocks study lab kits",
        "Sustains frequent and effective email communications between RDR and the CRO/Sponsor for questions and issues that may arise",
        "Communicates with potential new patients",
        "Makes and maintains organized subject binders",
    ]
    },
    {
      title: "Research Assistant",
      description: "Learns and attempts data entry, clearing of queries, and participant reimbursements",
      duties: [
        "Learns and attempts data entry, clearing of queries, and participant reimbursements",
        "Assists with processing and shipping of biological samples",
        "Communicates with trial participants and assists with scheduling",
        "Assists clinical research coordinators with study visits and filing/maintenance of subject binders",
      ]
    },
    {
      title: "Pharmacy Technician",
      description: "Assists pharmacist in preparation of investigational product (IP) administered to trial participants",
      duties: [
        "Assists pharmacist in preparation of investigational product (IP) administered to trial participants",
        "Receives and sends IP shipments",
        "Accurately maintains temperature logs for IP as required",
        "Handles IP accountability and maintains Pharmacy Binder with documentation of IP receipt, dispensation, and destruction",
      ]
    },
    {
      title: "Clinical Trial Liaison",
      description: "Establishes and maintains relationships with academic researchers, private practitioners, and industry thought leaders in the field of neurogenetic rare disease",
      duties: [
        "Establishes and maintains relationships with academic researchers, private practitioners, and industry thought leaders in the field of neurogenetic rare disease",
        "Attends professional conferences, patient advocacy and support groups, and other events to raise awareness about Rare Disease Research, LLC, and promote collaborations with external entities and stakeholders",
        "Collaborate with the regulatory team during the start-up process of new clinical trials, including budget and contract negotiations with study sponsors and service providers",
      ]
    },
    {
      title: "Administrative Assistant/Receptionist",
      description: "Greets trial participants arriving for clinic visits and other visitors",
      duties: [
        "Greets trial participants arriving for clinic visits and other visitors",
        "Gives facility tours to monitors, sponsors, and other visitors",
        "Answers office phone and directs inquiries to the correct site personnel",
        "Assists with scheduling of on-site visits of monitors and sponsors",
        "Assists with shipping and receipt of packages",
      ]
    },
    {
      title: "Rare Disease Research Internship",
      description: "Our internship program is currently accepting applications. If you are interested in joining us, please submit your resume below. In your cover letter, please include the following:",
      duties: [
        "Why does clinical research interest you?",
        "What are you doing now to better the world around you?"
      ]
    },
  ]

  view = this.jobs[0];

  constructor(private http: HttpClient) { }

  onClick(index: number) {
    this.view = this.jobs[index]
    console.log(this.view.title + this.jobs[index].title)
  }

  onSubmit(data: any) {
    //alert("Entered data is: " + JSON.stringify(data))
    this.http.post(environment.URL + "/mail", data).subscribe(() => {
      console.log('Data added successfully!')
    }, (err) => {
      console.log(err);
    });
  }

  onFileSelected(file : any){
    // this.selectedFile = file;
    console.log(file)
    this.selectedFile = <File>file.target.files[0];
    console.log(this.selectedFile)
  }

  onUpload(){
    const fileData = new FormData();
    fileData.append('fileUpload', this.selectedFile, this.selectedFile.name);
    console.log(fileData);
    this.http.post(environment.URL + "upload", fileData) 
    .subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
