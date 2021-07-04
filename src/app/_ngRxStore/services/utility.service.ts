

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {map } from 'rxjs/operators';


const API_ROOT: string = environment.apiUrl + '/assets/data/';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {



    constructor(private httpClient: HttpClient) {}



    getLanguageList(): Observable<string[]> {

        return this.httpClient.get<string[]>( API_ROOT + 'SampleData.json' ).pipe(
            map( (data: any[]) => data.map( (obj) => obj.language as string) )
        );
    }

    getCompanyList(): Observable<string[]> {

        return this.httpClient.get<string[]>( API_ROOT + 'SampleData.json' ).pipe(
            map( (data: any[]) => data.map( (obj) => obj.company as string) )
        );
    }

    getSkillList(): Observable<string[]> {

        return this.httpClient.get<string[]>( API_ROOT + 'SampleData.json' ).pipe(
            map( (data: any[]) => data.map( (obj) => obj.skills) )
        );
    }
}
