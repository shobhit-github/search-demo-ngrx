

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as mentorModel from '../models';
import * as _ from 'lodash';

import {environment} from '../../../environments/environment';
import {map } from 'rxjs/operators';


const API_ROOT: string = environment.apiUrl + '/assets/data/';

@Injectable({
    providedIn: 'root'
})
export class MentorService {



    constructor(private httpClient: HttpClient) {}


    getMentorList(query: any): Observable<mentorModel.Mentor[]> {

        return this.httpClient.get<mentorModel.Mentor[]>( API_ROOT + 'SampleData.json' ).pipe(
            map( (data: mentorModel.Mentor[]) => this.searchCriteriaUsingAnd(data, query) as mentorModel.Mentor[] )
        );
    }

    private searchCriteriaUsingOr(data: mentorModel.Mentor[], query: any): mentorModel.Mentor[] {

        const arrayOfKeys: string[] = Object.keys(query);
        const filteredObjects: mentorModel.Mentor[] = [];

        if ( ! _.isEmpty(query) ) {

            arrayOfKeys.forEach( key => {

                if (key === 'chargeAmount') {
                    filteredObjects.push(
                        ...data.filter( (obj: mentorModel.Mentor) =>
                            obj.chargeAmount >= query [key][0] && obj.chargeAmount <= query [key][1] )
                    );
                } else {
                    filteredObjects.push(
                        ...data.filter( (obj: mentorModel.Mentor) => {
                            if (query[key].length) {
                                return !_.isEmpty( _.intersection( query[key], Array.isArray (obj [key]) ? obj [key] : [ obj [key] ] ) );
                            }
                            return obj;
                        })
                    );
                }
            });
            return filteredObjects.filter( m => _.uniq(filteredObjects.map( o => o._id)).includes (m._id)  );
        } else {
            return data;
        }
    }

    private searchCriteriaUsingAnd(data: mentorModel.Mentor[], query: any): mentorModel.Mentor[] {

        const arrayOfKeys: string[] = Object.keys(query);
        let filteredObjects: mentorModel.Mentor[] = data;

        if ( ! _.isEmpty(query) ) {

            arrayOfKeys.forEach( key => {

                if (key === 'chargeAmount') {
                    filteredObjects = filteredObjects.filter( (obj: mentorModel.Mentor) =>
                        obj.chargeAmount >= query [key][0] && obj.chargeAmount <= query [key][1] );
                } else {
                    filteredObjects = (
                        filteredObjects.filter( (obj: mentorModel.Mentor) => {
                            if (query[key].length) {
                                return !_.isEmpty( _.intersection( query[key], Array.isArray (obj [key]) ? obj [key] : [ obj [key] ] ) );
                            }
                            return obj;
                        })
                    );
                }
            });
            return filteredObjects.filter( m => _.uniq(filteredObjects.map( o => o._id)).includes (m._id)  );
        } else {
            return data;
        }
    }
}
