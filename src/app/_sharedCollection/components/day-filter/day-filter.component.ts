import {Component, OnInit} from '@angular/core';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import * as _ from 'lodash';


@Component({
    selector: 'app-day-filter',
    templateUrl: './day-filter.component.html',
    styleUrls: ['./day-filter.component.scss']
})
export class DayFilterComponent implements OnInit {

    public dayAvailableList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private selectedItem: string[] = [];

    constructor(private store: Store<ApplicationState>) {
    }

    ngOnInit(): void {
    }


    private queryByDayAvailable(dayAvailable: string[]): void {

        this.store.dispatch( new fromMentorAction.SearchParam({dayAvailable}));
    }

    public onCheckBoxSelect($evt): void {


        this.selectedItem.push(  $evt.value );

        if (! $evt.checked ) {
            this.selectedItem = _.pull( this.selectedItem, $evt.value);
        }

        this.queryByDayAvailable( _.cloneDeep(this.selectedItem));
    }
}
