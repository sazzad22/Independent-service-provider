import React from "react";
import google from '../../../images/icon/google-logo.png';

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2 font-weight-bold">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>

      <div>
        <button  className="btn btn-info rounded-pill w-75 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2 text-white">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
