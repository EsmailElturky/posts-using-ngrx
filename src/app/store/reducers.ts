// add initial state here
import { AppState } from '../AppState';
import { createReducer, on } from '@ngrx/store';
import * as postsActions from './actions'
import {Post, PostState} from "../post.entity";
export const PostsInitialState:PostState  ={
    isLoading: false,
    posts: [],
    error: null,
}
// add reducer function here
export const PostsReducer = createReducer(
    PostsInitialState,
    on(postsActions.getPosts, (state) => ({ ...state, isLoading: true })),
    on(postsActions.getPostsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      posts: [...action.posts],
    }
    )),
    on(postsActions.getPostsFailure, (state,action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }
    ))
  );
