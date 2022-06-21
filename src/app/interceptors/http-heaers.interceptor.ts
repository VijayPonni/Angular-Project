import { HttpEvent, HttpInterceptor, HttpRequest , HttpHandler} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor () {} 

    intercept(
        req : HttpRequest<any>,
        next : HttpHandler
    ):Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders : {
                'x-rapidapi-key' : '20c7e658f5msh0eb39d2f3f99f3cp19f02cjsn7ef7973168ab',
                'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key :'8a1997673bca4bd295f77283643a40e8',
            }
        });
        return next.handle(req);
    }
}