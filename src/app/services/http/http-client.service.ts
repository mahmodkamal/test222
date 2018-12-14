import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { urlSettings } from '../settings/urlSettings';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  withCredentials: false,
};
@Injectable()

export class HttpClientService {
  lng;

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) locale: string

  ) {
    this.lng = locale;
  }
  /**
     * a getter to return the required headers for Backend
     * X-CSRF-Token - application token from services/session/connect
     * Content-Type - the type of the request content.
     * Accept - forcing Backend to return the response as a json object
     * @return object of the headers
     */
  getOptions(): RequestOptionsArgs {

    const header = new Headers();
    header.set('Content-Type', 'application/json');
    header.set('Accept', 'application/json');
    const options: RequestOptionsArgs = new RequestOptions();
    options.withCredentials = false;
    return options;
  }

  /**
   * getting token from Backend services module
   * @return http text token response
   */

  // setToken(): Observable<string> {
  //   return this.http.get(`${ERP.backEndUrl}oauth/token`, httpOptions).map(res => {
  //     localStorage.setItem("appToken", res.text())
  //     return res.text();
  //   });
  // }

  /**
   * building up the full url path for each resource and / or params
   * @param resource the entity resource param. ex: system/'connect', user/'login'
   * @return full request path after adding the entity type and resource param
   */
  fullRequestURL(resource: string | number): string {
    
    return urlSettings.baseUrl + resource;
  }

  /**
   * basic http get request with headers.
   * @param resource the entity resource param. ex: system/'connect', user/'login'
   * @return http json response
   */
  get(resource?: string | number, params?: {}): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.get(this.fullRequestURL(resource), httpOptions);
  }

  /**
   * basic http post request with headers.
   * @param resource the entity resource param. ex: system/'connect', user/'login'
   * @param body the contenct of the request
   * @return http json response
   */
  post(body: any = {}, resource?: string | number, params?: {}): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.post(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * basic http put request with headers.
   * @param resource the entity resource param. ex: system/'connect', user/'login'
   * @param body the contenct of the request
   * @return http json response
   */
  put(body: any = {}, resource?: string | number): Observable<any> {
    return this.http.put(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * basic http delete request with headers.
   * @param resource the entity resource param. ex: system/'connect', user/'login'
   * @return http json response
   */
  delete(params: any = {}, resource?: string | number): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.delete(this.fullRequestURL(resource), httpOptions);
  }

  /**
   * Serializin arguments as a string
   * @param options object of Backend parametars to serialize
   * @return string of parameters
   */
  getArgs(options: any): string {
    if (!options) {
      return '';
    }
    var args = '?';
    Object.keys(options).forEach((key, index) => {
      args += this.optionToString(key, options[key]);
    });
    return args;
  }

  /**
   * Check if variable is array of objects
   * @param value array to check
   */
  private isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  /**
   * serializing eatch option
   * @param key option key
   * @param value option value
   * @return single option serilization
   */
  optionToString(key: string, value: any): string {
    if (!value) {
      return '';
    }
    var str = '';
    if (value instanceof Array) {
      value.forEach((element, index) => {
        str += `${key}[${index}]=${element}&`;
      });
    } else if (value instanceof Object) {
      Object.keys(value).forEach((element, index) => {
        if (value instanceof Object) {
          str += this.serializeObject(value[element], `${key}[${element}]`);
        } else {
          str += `${key}[${element}]=${value[element]}&`;
        }
      });
    } else {
      str += `${key}=${value}&`;
    }
    return str;
  }

  /**
   * serializing the object keys
   * @param obj object to serialize
   */
  private serializeObject(obj: any, parentSerialized: string): string {
    var str = '';
    Object.keys(obj).forEach((key, index) => {
      const value = obj[key];
      if (value instanceof Object) {
        str += `${this.serializeObject(value, `${parentSerialized}[${key}]`)}`;
      } else {
        str += `${parentSerialized}[${key}]=${value}&`;
      }
    });
    return str;
  }

}