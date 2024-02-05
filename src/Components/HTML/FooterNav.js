import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/FooterNav.css';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';


const FooterNav = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="notice">
            <div className="notice__brdr">
                <div className="notice__recommend">
                    <p>See personalized recommendations</p>
                </div>
                <div>
                    <Link to={!user && "/Login"} className="notice__button">
                        <button onClick={handleAuthenticaton}>
                            {user ? "Sign Out" : "Sign In"}
                        </button>
                    </Link>
                </div>
                <div className="notice__newCustomer">
                    <p className="newCustomer">
                        {user ? user?.email : "New customer?"}&nbsp;
                        <Link to={"/Login"} className="header__clearlink">
                            {user ? null : "start here."}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterNav;