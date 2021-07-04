import {Component, OnInit} from '@angular/core';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import * as _ from 'lodash';

@Component({
    selector: 'app-price-filter',
    templateUrl: './price-filter.component.html',
    styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

    private selectedItem: number[] = [0 , 0];

    constructor(private store: Store<ApplicationState>) {
    }

    ngOnInit(): void {
    }

    private queryByPriceRange(chargeAmount: string[]): void {

        this.store.dispatch(new fromMentorAction.SearchParam({chargeAmount}));
    }

    public onChangeRange($evt, type: 'MIN' | 'MAX'): void {

        this.selectedItem [type === 'MAX' ? 1 : 0] = _.isEmpty($evt.value) || $evt.value === 0 ? 0 : ~~$evt.value;

        this.queryByPriceRange(_.cloneDeep(this.selectedItem));
    }

}
