// add action types here
import { createAction ,props} from '@ngrx/store';
import {Post, PostState} from "../post.entity";
export const GET_POSTS = '[POSTS] Get Posts';
export const GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
export const GET_POSTS_FAILURE = '[POSTS] Get Posts Failure';

// add action creators here
export const getPosts = createAction(GET_POSTS);
export const getPostsSuccess = createAction(  GET_POSTS_SUCCESS,  props<{ posts: Post[] }>());
export const getPostsFailure = createAction(  GET_POSTS_FAILURE,  props<{ error: any }>());
