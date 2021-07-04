import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../_ngRxStore/reducers';
import * as fromUtilReducer from 'src/app/_ngRxStore/reducers/utility.reducer';
import * as fromMentorAction from '../../../_ngRxStore/actions/mentor.action';
import * as _ from 'lodash';

interface FilterBy {
    name: string;
    value: string;
}

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    @Output() searchTerm: EventEmitter<any> = new EventEmitter<any>();


    public toggledD: boolean;
    public toggledDropdown: boolean;
    public skillsList: string[] = [];
    private selectedItem: string[] = [];

    public filterByItems: FilterBy[] = [
        {
            name: 'Filter By:',
            value: null
        },
        {
            name: 'Mentor Name',
            value: 'mentorName'
        },
        {
            name: 'Designation',
            value: 'title'
        },
        {
            name: 'Cover Letter',
            value: 'description'
        }
    ];

    public filterBy: FilterBy = this.filterByItems[0];

    constructor(private readonly store: Store<ApplicationState>) {
    }

    ngOnInit(): void {

        this.store.select(fromUtilReducer.getListOfSkills).subscribe(
            next => this.skillsList = next
        );
    }

    private queryBySkill(skills: string[]): void {

        this.store.dispatch( new fromMentorAction.SearchParam({skills}));
    }

    public onCheckBoxSelect($evt): void {


        this.selectedItem.push(  $evt.value );

        if (! $evt.checked ) {
            this.selectedItem = _.pull( this.selectedItem, $evt.value);
        }

        this.queryBySkill( _.cloneDeep(this.selectedItem));
    }

    onSearch($evt): void {
        this.searchTerm.emit({[this.filterBy.value || 'mentorName']: $evt.value});
    }

}
