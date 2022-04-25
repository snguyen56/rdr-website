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
      description: "Coordinates scheduling of patients for their studies (visits, physical therapy, MRIs, specialist appointments, follow-ups, etc.)"
    },
    {
      title: "Research Assistant",
      description: "Learns and attempts data entry, clearing of queries, and participant reimbursements"
    },
    {
      title: "Pharmacy Technician",
      description: "Assists pharmacist in preparation of investigational product (IP) administered to trial participants"
    },
    {
      title: "Clinical Trial Liaison",
      description: "Establishes and maintains relationships with academic researchers, private practitioners, and industry thought leaders in the field of neurogenetic rare disease"
    },
    {
      title: "Administrative Assistant/Receptionist",
      description: "Greets trial participants arriving for clinic visits and other visitors"
    },
    {
      title: "Rare Disease Research Internship",
      description: "Why does clinical research interest you?"
    },
  ]

  view = this.jobs[1];

  constructor(private http: HttpClient) { }

  onClick(index: number) {
    this.view = this.jobs[index]
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
