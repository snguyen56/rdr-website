import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  selectedFile: File = null as any;

  constructor(private http: HttpClient) { }

  onClickSubmit(data: any) {
    //alert("Entered data is: " + JSON.stringify(data))
    this.http.post("http://localhost:8080/mail", data).subscribe(() => {
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
    this.http.post("http://localhost:8080/upload", fileData) 
    .subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
