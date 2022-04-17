import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  selectedFile: File = null as any;

  constructor(private http: HttpClient) { }

  onClickSubmit(data: any) {
    // alert("Entered data is: " + JSON.stringify(data))
    this.http.post(environment.URL + "mail", data).subscribe({
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
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
    this.http.post("http://localhost:8080/upload", fileData).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {

  }

}
