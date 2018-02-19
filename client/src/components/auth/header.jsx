import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const Header = () => {
    if (isLoggedIn()) {
        return (
            <div>
                <Link className="btn btn-info" to="/logout">Logout</Link>
                <Link className="btn btn-info" to="/admin">Admin</Link>

            </div>
        );
    } else {
        return (
            <div>
                <Link className="btn btn-info" to="/login">Login</Link>
                <Link className="btn btn-info" to="/contact">Contact</Link>
            </div>
        );
    }
};

export default Header;