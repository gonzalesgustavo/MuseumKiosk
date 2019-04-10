import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DinosaursService {
  //insert ip and port in url (in production this will be a call to a www.thefossilapi.com/api ...)
  url: string = "http://localhost:3000/api/v1/dinosaurs";
  constructor(private http: HttpClient) {}

  getDinos() {
    return this.http.get(`${this.url}`);
  }
}
