import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {
  private apiUrl = 'https://aztro.sameerkumar.website/?sign=aries&day=today';

  constructor(private http: HttpClient) {}

  getZodiacSign(sign: string, day: string): Observable<string> {
    const options = { params: { sign, day } };
    return this.http.post(this.apiUrl, options).pipe(
      map((response: any) => {
        return response.description;
      })
    );
  }
}
