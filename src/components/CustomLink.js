import React from 'react';
import {Link} from "react-router-dom";
import {useMatch} from "react-router-dom";

const CustomLink = ({to, children}) => {
    const match = useMatch(to);
    return (
        <Link to={to} style={{ color: match ? 'red' : ''}}>
            {children}
        </Link>
    );
};

export default CustomLink;