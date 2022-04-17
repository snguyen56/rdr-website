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

  ngOnInit(): void {

  }

}
