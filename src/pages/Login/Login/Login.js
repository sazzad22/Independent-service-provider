import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate();
  let errorElement;


  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //reset password auth
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  //redirecting to the page from where he came from
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  //email or password error
  if (error) {
    console.log(error);
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
}

  //reset password handle
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset password email sent");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className=" mx-auto container w-50 min-vh-100">
      <h3>Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        {errorElement}

        <p>
          New to the website?{" "}
          <Link
            to="/signup"
            className="text-primary  pe-auto "
            onClick={navigateToSignup}
          >
            Please Sign Up
          </Link>
        </p>

        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary pe-auto "
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
      </Form>

      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
