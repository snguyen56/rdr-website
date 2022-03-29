import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private http: HttpClient) { }

  onClickSubmit(data: any) {
    alert("Entered data is: " + JSON.stringify(data))
  //   this.http.post("http://localhost:8080/mail", data).subscribe({
  //     error: (e) => console.error(e),
  //     complete: () => console.info('complete') 
  // })

  }

  ngOnInit(): void {
  }

}
