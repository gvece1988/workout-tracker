import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable()
export class CommonService {

    constructor(private httpClient: HttpClient) {
    }

    public get(url: string): Promise<any>
    {
        return this.httpClient.get(url).toPromise();    
    }

}
