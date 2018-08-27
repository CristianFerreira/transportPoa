import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request } from '@angular/http';
import { Router } from '@angular/router';

import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from "../../environments/app-config";

@Injectable()
export abstract class HttpBaseService {

    private http: Http;
    protected router: Router;
    protected habilitarDepuracaoRequisicoes: boolean;
    public headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        this.headers.append('Access-Control-Allow-Origin', 'dataPoa');
    }


    protected get(url: string): Observable<Response> {
        let requestOptions = new RequestOptions({ headers:null, 
            withCredentials: true });
        return this.responseIntercept(this.http.get((url), requestOptions));
    }

    private responseIntercept(obs: Observable<Response>): Observable<Response> {
        return obs.pipe(
            catchError(err => {
                if (err.status == 401) {
                    this.router.navigateByUrl('/');
                    return EMPTY;
                } else {
                    return throwError(err);
                }
            })
        );
    }
}
