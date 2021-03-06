import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Nav.js"
import { Login } from "./auth/Login.js"
import { PostProvider } from "./post/PostProvider.js"
import { PostList } from "./post/PostList.js"
import { PostForm } from "./post/PostForm.js"
import { PostDetails } from "./post/PostDetails.js"


export const ApplicationView = (props) => {
    return (
        <>
            <PostProvider>

                <div className="Views">
                    <h1 className="header">Dog Blog</h1>
                    <Route exact path="/" render={
                        props => <PostList {...props} />
                    } />
                    <Route exact path="/create" render={
                        props => <PostForm {...props} />
                    } />
                    <Route exact path="/create/:postId(\d+)" render={
                        props => <PostForm {...props} />
                    } />
                    <Route exact path="/details/:postId(\d+)" render={
                        props => <PostDetails {...props} />
                    } />
                    <Route exact path="/login" render={props => <Login {...props} />} />

                </div>
            </PostProvider>
        </>
    )
}