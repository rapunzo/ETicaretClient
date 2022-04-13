import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  private url(requestParameters: Partial<RequestParameters>): string {

    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ''}`;
  }



  get<T>(requestParameters: Partial<RequestParameters>, id?: string): Observable<T> {

    let url: string = ""
    if (requestParameters.fullEndpoint)
      url = requestParameters.fullEndpoint;
    else
      url = `${this.url(requestParameters)}${id ? `/${id}` : ''}`;

    return this.httpClient.get<T>(url);

  }

  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = ""
    if (requestParameters.fullEndpoint)
      url = requestParameters.fullEndpoint;
    else
      url = `${this.url(requestParameters)}`;

    return this.httpClient.post<T>(url, body);
  }

  put() {
  }

  delete() {
  }
}

export class RequestParameters {
  controller?: string;
  action?: string;

  headers?: string;
  baseUrl?: string;
  fullEndpoint?: string;
}
