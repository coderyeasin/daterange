import React from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "../../sass/style.scss";

// const required = "This field is required";
// const maxLength = "Your input exceed maximum length";
// const errorMessage = (error) => {
//   return <div className="invalid-feedback">{error}</div>;
// };

const Register = () => {
  const navigate = useNavigate();
  const { handleGoogle, handleRegistration, errorsFire } = useFirebase();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.genPassword !== data.conPassword) {
      alert("password did not match");
      return;
    }
    handleRegistration(data.email, data.password);

    reset();
  };

  return (
    <div>
      <div className=" register_user">
        <div className="feature_image">
          <h3>Choose a date range</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quos iure quis perspiciatis, consequatur amet.
          </p>
        </div>
        <div className="signup_form">
          <form onSubmit={handleSubmit(onSubmit)} className="account_form">
            <span>Create an account</span>
            <p>{errorsFire}</p>
            <div className="form-group my-3">
              <label htmlFor="fullName">Your email address</label>
              <input
                className="form-control"
                type="email"
                name="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {/* {errors.Email &&
                  errors.Email.type === "required" &&
                  errorMessage(required)} */}
            </div>

            <div className="form-group">
              <label htmlFor="genPassword">Your password</label>
              <input
                className="form-control"
                type="password"
                name="genPassword"
                {...register("genPassword", { required: true })}
              />
              {/* {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)} */}
            </div>
            <div className="form-group">
              <label htmlFor="conPassword">Confirm password</label>
              <input
                className="form-control"
                type="password"
                name="conPassword"
                {...register("conPassword", { required: true })}
              />
              {/* {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)} */}
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Your full name</label>
              <input
                className="form-control"
                type="text"
                name="fullName"
                {...register("fullName", { required: true, maxLength: 50 })}
              />
              {/* {errors.Name &&
                  errors.Name.type === "required" &&
                  errorMessage(required)} */}
              {/* {errors.Name &&
                  errors.Name.type === "maxLength" &&
                  errorMessage(maxLength)} */}
            </div>
            <div className="form-group">
              <label htmlFor="PhoneNumber">Your phone number</label>
              <input
                className="form-control"
                type="tel"
                {...register("phone", { maxLength: 12 })}
              />
              {/* {errors.MobileNumber &&
                  errors.MobileNumber.type === "maxLength" &&
                  errorMessage(maxLength)} */}
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                name="agree_btn"
                id="agree_btn"
                {...register("agree")}
              />
              <label htmlFor="agree_btn" className="check_box">
                I read agree Terms and Conditions
              </label>
            </div>

            <div className="form-group btn_group">
              <input
                className="account_btn"
                type="submit"
                value="Create account"
              />
              <input
                onClick={handleGoogle}
                className="goggle_btn"
                type="submit"
                value="Google"
              />
            </div>
            <span className="user_connection">
              Already Registered?
              <Link className="login_page" to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
