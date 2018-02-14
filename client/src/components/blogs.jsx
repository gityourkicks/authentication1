import React, { Component } from 'react';
import BlogForm from './blogForm';
import BlogList from './blogList';
import * as blogService from '../services/blogs';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []

        };
    }

    componentDidMount() {
        this.getBlogs();
    }

    getBlogs() {
        blogService.all()
            .then((blogs) => {
                console.log(blogs);

                this.setState({
                    blogs: blogs
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(post) {
        console.log(post);
        blogService.insert(post)
            .then(() => {
                this.getBlogs();
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container">
                <BlogForm action="Create" postBlog={(post) => { this.addBlog(post); }} />
                <BlogList isAdmin={true} blogs={this.state.blogs} />
            </div>
        );
    }
}

export default Blogs;