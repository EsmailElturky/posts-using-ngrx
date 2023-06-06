import {AppState} from "../AppState";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state:AppState) => state.posts

export const selectPosts = createSelector(selectFeature, (state) => state.posts);
export const selectIsLoading = createSelector(selectFeature, (state) => state.isLoading);
export const selectError = createSelector(selectFeature, (state) => state.error);
