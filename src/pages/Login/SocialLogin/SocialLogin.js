import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/icon/google-logo.png";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();  
  const navigate = useNavigate();


  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error:{error?.message}</p>;
    }
    //Loading spinner
    if (loading) {
        return <Loading></Loading>
    }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2 font-weight-bold">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info rounded-pill w-75 d-block mx-auto my-3"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2 text-white">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
