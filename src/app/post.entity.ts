export interface Post{
    id:number;
    title:string;
}
export interface PostState{
    isLoading: boolean;
    posts: Post[];
    error: string | null;
}
