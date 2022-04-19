import { async } from "@firebase/util";
import { Toast } from "bootstrap";
import React, { useRef } from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate ();
    const location =useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      if(loading || sending) {
        return <Loading></Loading>
      }

      if(user){
          navigate(from, {replace: true});
      }

      if(error){
        errorElement= <p className="text-danger" >Error:{error?.message}</p>
      }
    const handelSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event =>{
        navigate('/register');
    }

    const resetPassword = async () => {
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        Toast('Sent email');
      }
      else{
        Toast('please enter your email address');
      }
    }
    return(
        <div className="container w-50 mx-auto">
            <h4 className="text-primary text-center mt-2"> Please login here</h4>
            <Form onSubmit={handelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p>New Client !!! <Link to ="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>Please Register First.</Link></p>
<p>Forget Password? <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword} >Reset Password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Login;