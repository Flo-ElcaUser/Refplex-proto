import { Component, OnInit, Injectable } from '@angular/core';
import { SelectEvent, FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.scss']
})
export class ImportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadSaveUrl = 'http://localhost:60632/api/FileUpload/SaveFile'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  myFiles: Array<FileInfo> = [];

  selectEventHandler(e: SelectEvent) {
    e.files.forEach((file) => this.myFiles.push(file));
  }

  successEventHandler(e) {
    this.myFiles = e.response.json().uri;
  }

  uploadRestrictions: FileRestrictions = {
    allowedExtensions: ['.csv', '.xls']
  };

}

// @Injectable()
// export class UploadInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (req.url === 'saveUrl') {
//       const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
//         type: HttpEventType.UploadProgress,
//         loaded: x,
//         total: 100
//       }).pipe(delay(1000)));

//       const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
//       events.push(success);

//       return concat(...events);
//     }

//     if (req.url === 'removeUrl') {
//       return of(new HttpResponse({ status: 200 }));
//     }

//     return next.handle(req);
//   }
// }
