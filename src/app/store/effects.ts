import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostsService} from "../posts.service";
import * as postActions from "./actions";
import {catchError, map, switchMap} from "rxjs";
import {of} from "rxjs";

@Injectable()
export class PostEffect{
  constructor(private actions$:Actions, private postService:PostsService) {
  }
  getPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(postActions.getPosts),
      switchMap(()=>{
      return this.postService.getPosts().pipe(
        map((posts)=>postActions.getPostsSuccess({posts})),
        catchError((error)=>of(postActions.getPostsFailure({error})))
      )
      }
      )
    )
  )
}
