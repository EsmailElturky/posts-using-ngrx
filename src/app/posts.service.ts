import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Post} from "./post.entity";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts$:Observable<Post[]>=of([{id:1,title:'post1'},{id:2,title:'post2'},{id:3,title:'post3'}])
  getPosts():Observable<{ id:number,title:string }[]>{return this.posts$.pipe(delay(2000))}
}
