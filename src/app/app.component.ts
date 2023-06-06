import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from './store/actions';
import {Observable} from "rxjs";
import {Post} from "./post.entity";
import * as selectors from './store/selectors'
import {AppState} from "./AppState";
import {selectPosts} from "./store/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-items';
  posts$ : Observable<Post[]>
  isLoading$ : Observable<boolean>
  error$ :Observable<string | null>
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(selectors.selectPosts);
    this.isLoading$ = this.store.select(selectors.selectIsLoading);
    this.error$ = this.store.select(selectors.selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(actions.getPosts());
    this.isLoading$.subscribe(
      (isLoading) => {
        console.log(isLoading);
      }
    )
  }
}
