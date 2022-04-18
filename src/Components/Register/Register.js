import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import './Register.css';
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user){
        navigate('/home');
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
           await createUserWithEmailAndPassword(email, password);
            await updateProfile ({ displayName: name});
            alert('Updated profile');
            navigate('/home');
        
    }
    return(
        <div className="registration-form">
            <h4 style={{textAlign: 'center'}}> Please Register before having services</h4>
            <form onSubmit={handleRegister}>
            <input type="rext" name="name" id="" placeholder="Your Name" required/>
                <input type="email" name="email" id="" placeholder="Your Email Address" required/>
                <input type="password" name="password" id="" placeholder="Secret Password!!!" required/>
                <input type="submit" value="Register" />
                <p>Already Registred !!! <Link to ="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login Here.</Link></p>
               
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;