import React from "react";
import google from '../../../images/google-logo.png'
import Facebook from '../../../images/facebook.png'
import git from '../../../images/git.png'

const SocialLogin = () =>{
    return (
        <div>
            <div className="d-flex align items-center">
                <div style={{height: '1px'}} className="bg-primary w-50" ></div>
               <p className=" px-2" >or</p>
               <div style={{height: '1px'}} className="bg-primary w-50" ></div>
            </div>
            <div>
                <button  className="btn btn-info d-block mx-auto w-50" ><img height={'40px'} src={google} alt="" />   Google Sign In</button>
                <br></br>
                <button  className="btn btn-info d-block mx-auto w-50" ><img height={'40px'} src={Facebook} alt="" />   Facebook Sign In</button>
                <br></br>
                <button  className="btn btn-info d-block mx-auto w-50" ><img height={'40px'} src={git} alt="" />   Github Sign In</button>
                
            </div>
        </div>
    );
};

export default SocialLogin;