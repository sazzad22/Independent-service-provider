import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
}

  const navigateToSignup = () => {
        navigate('/signup');
  }
  
  return (
    <div className=" mx-auto container w-50 min-vh-100">
      <h3>Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
              </Button>
              <p>New to the website? <Link to="/signup" className='text-danger pe-auto ' onClick={navigateToSignup} >Please Sign Up</Link></p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
