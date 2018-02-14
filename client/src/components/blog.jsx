import React from 'react';
import { Link } from 'react-router-dom';


const Blog = (props) => {
    let readHref = '/';

    if (props.isAdmin === true) {
        readHref = readHref + 'admin/';
    }

    readHref = readHref + props.post.id;

    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.post.title}
                </p>
                <p className="card-text">
                    {props.post.content}
                </p>


                <Link to={readHref} className="btn btn-secondary btn-sm"> Read</Link>

            </div>
        </div>
    );
};

export default Blog;
