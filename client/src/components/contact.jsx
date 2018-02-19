import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            <Fragment>
                <form>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>



                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Message</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </Fragment>
        )
    }

}

export default Contact;




