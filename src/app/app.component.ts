import {Component, OnInit} from '@angular/core';
import {ApplicationState} from './_ngRxStore/reducers';
import {Store} from '@ngrx/store';
import * as fromMentorAction from 'src/app/_ngRxStore/actions/mentor.action';
import * as fromUtilAction from 'src/app/_ngRxStore/actions/utility.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SampleTest';

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.store.dispatch( new fromMentorAction.GetMentorList({}) );
    this.store.dispatch( new fromUtilAction.ListLanguage() );
    this.store.dispatch( new fromUtilAction.ListCompany() );
    this.store.dispatch( new fromUtilAction.ListSkills() );
  }
}
