import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/signup');
    }
  return (
    <div className=" mx-auto container w-50 min-vh-100">
      <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
              </Button>
              <p>New to the website? <Link to="/signup" className='text-danger pe-auto ' onClick={navigateToSignup} >Please Sign Up</Link></p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
