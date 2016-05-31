import { Http, Response, Headers, RequestOptions }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

export class BaseService<T> {

  public static BASE_URL: string = "http://localhost:8080/";

  constructor(protected http: Http, protected base_url: string) {}

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  getAll(): Observable<T[]> {
    return this.http.get(this.base_url).map(this.extractData).catch(this.handleError);
  }

  create(obj: T): Observable<T> {
    let body = JSON.stringify(obj);
    return this.http.post(this.base_url, body, this.options).map(this.extractData).catch(this.handleError);
  }

  getBy(path: string): Observable<T> {
    return this.http.get(this.base_url + path).map(this.extractData).catch(this.handleError);
  }

  remove(path: string) {
    return this.http.delete(this.base_url + path, this.options);
  }

  update(path: string, obj: T): Observable<T> {
    let body = JSON.stringify(obj);
    return this.http.put(this.base_url + path, body, this.options).map(this.extractData).catch(this.handleError);
  }

  protected extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`Response status: ${res.status}`);
    }
    return res.json() || {};
  }

  protected handleError(error: any) {
    let msg = error.message || 'Server error';
    return Observable.throw(msg);
  }
}
