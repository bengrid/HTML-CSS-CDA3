import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ListFormation } from './formation-mock';
import { Formation } from './formation.model';
import {HttpClient, HttpHeaders } from '@angular/common/http' 
import { Observable } from 'rxjs';


const baseUrl = `${environment.endpoint}/formations`
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorisation': 'Basic '+btoa('root:admin'),
    'Access-Control-Allow-Origin': '*',
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormationList(): Observable<Formation[]>{
    return this.http.get<Formation[]>(baseUrl, httpOptions);
  }

  getFormationById(formationId: number): Observable<Formation|undefined>{
    return this.http.get<Formation>(`${baseUrl}/${formationId}`, httpOptions);
  }

  //creation

  createFormation(formation: Formation): Observable<Formation>{
    return this.http.post<Formation>(baseUrl, formation, httpOptions);
  }

  //Modification
  editFormation(formationId: number, formation: Formation): Observable<Formation|undefined>{
    return this.http.put<Formation>(`${baseUrl}/${formationId}`,formation,httpOptions)
  }

  //Delete
  deleteFormation(formationId: number){
    this.http.delete<Formation>(`${baseUrl}/${formationId}`, httpOptions)
  }

}
