import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  //creating new user(Sign Up)
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
  //navigated to the login page
  const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
  }
  if(loading){
    return <Loading></Loading>
}
  
  //form handle
  const handleSignUp = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);

  }
  return (
    <div className=" mx-auto container w-50 min-vh-100">
      <h3>Sign Up!</h3>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get Updates" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p>Already have an account? <Link to="/login" className='text-primary pe-auto ' onClick={navigateLogin}>Please Login</Link> </p>
    </div>
  );
};

export default SignUp;
