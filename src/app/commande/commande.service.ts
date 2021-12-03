import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { environment } from "src/environments/environment";

import { LazyLoadEvent } from "primeng/api";


const optionRequete = {};
@Injectable({
  providedIn: "root",
})
export class CommandeService {
  constructor(private _http: HttpClient) {}
 
  getAllCommandesEnCours() {
    return this._http.get<any[]>(
      "https://sports.api.decathlon.com/"
     
    );
  }




}
