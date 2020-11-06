import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/reg";

@Injectable({
  providedIn: 'root',
})
export class ApiService{

  constructor(private http: HttpClient) {
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getRegistrations(): Observable<any> {
    console.log('getting registrations from DB');
    const getAll = '/reg/all';
    return this.http.get(getAll, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getRegistrationByKsuId(id: string): Observable<any> {
    const getBy = 'getByKsuId';
    const url = `${apiUrl}/${getBy}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postRegistration(data): Observable<any> {
    const createReg = 'create';
    const url = `${apiUrl}/${createReg}`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRegistration(id: string, data): Observable<any> {
    const update = 'update';
    const url = `${apiUrl}/${update}/${id}`;
    console.log(data);
    return this.http.put(url, data.value, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRegistration(id: string): Observable<{}> {
    const deleteByKsuId = 'delete';
    const url = `${apiUrl}/${deleteByKsuId}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(email: string): Observable<any>{
    const url = `${apiUrl}/${email}`;
    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}

