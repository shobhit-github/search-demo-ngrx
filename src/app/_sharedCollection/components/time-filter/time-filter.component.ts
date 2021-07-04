import {Component, OnInit} from '@angular/core';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import * as _ from 'lodash';


@Component({
    selector: 'app-time-filter',
    templateUrl: './time-filter.component.html',
    styleUrls: ['./time-filter.component.scss']
})
export class TimeFilterComponent implements OnInit {

    public timeAvailableList: string[] = ['00:00 - 06:00', '06:00 - 12:00', '12:00 - 18:00', '18:00 - 24:00'];
    private selectedItem: string[] = [];

    constructor(private store: Store<ApplicationState>) {
    }

    ngOnInit(): void {
    }

    private queryByTimeAvailable(timeAvailable: string[]): void {

        this.store.dispatch( new fromMentorAction.SearchParam({timeAvailable}));
    }

    public onCheckBoxSelect($evt): void {


        this.selectedItem.push(  $evt.value );

        if (! $evt.checked ) {
            this.selectedItem = _.pull( this.selectedItem, $evt.value);
        }

        this.queryByTimeAvailable( _.cloneDeep(this.selectedItem));
    }

}
