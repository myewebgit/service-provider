import React from "react";
import NotFoundpic from '../../images/NotFoundpic.jpg';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img className="w-100" height="500px" src={NotFoundpic} alt=""/>
            <h1 className="text-center text-danger" > Your Accountant is Not in This Way. <br></br> *************404***************</h1>
        </div>
    );
};

export default NotFound;