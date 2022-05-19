import React from 'react';
// import { Button, Container, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from '../../Hooks/useFirebase';
// import feature from "../../images/feature_img.jpg";
// import './Register.css'
import '../../sass/style.scss'


const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const Register = () => {
    const {handleGoogle} = useFirebase()
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => console.log(data);
    
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
              <div className="form-group my-3">
                <label
                  htmlFor="fullName"
                >
                  Your email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.Email &&
                  errors.Email.type === "required" &&
                  errorMessage(required)}
              </div>

              <div className="form-group">
                <label
                  htmlFor="g_pass"
                >
                  Your password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="g_pass"
                  {...register("g_password", { required: true })}
                />
                {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)}
              </div>
              <div className="form-group">
                <label
                  htmlFor="c_pass"
                >
                  Confirm password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="c_pass"
                  {...register("c_password", { required: true })}
                />
                {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)}
              </div>
              <div className="form-group">
                <label
                  htmlFor="fullName"
                >
                  Your full name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  {...register("fullName", { required: true, maxLength: 50 })}
                />
                {errors.Name &&
                  errors.Name.type === "required" &&
                  errorMessage(required)}
                {errors.Name &&
                  errors.Name.type === "maxLength" &&
                  errorMessage(maxLength)}
              </div>
              <div className="form-group">
                <label
                  htmlFor="PhoneNumber"
                >
                  Your phone number
                </label>
                <input
                  className="form-control"
                  type="tel"
                  {...register("phone", { maxLength: 12 })}
                />
                {errors.MobileNumber &&
                  errors.MobileNumber.type === "maxLength" &&
                  errorMessage(maxLength)}
              </div>

              <div className="form-group my-3">
                <input
                  type="checkbox"
                  name="agree_btn"
                  id="agree_btn"
                  {...register("agree")}
                />
                <label
                  htmlFor="agree_btn"
                  className="check_box"
                >
                  I read agree Terms and Conditions
                </label>
              </div>
              <div className="form-group btn_group">
                <input
                  className="account_btn"
                  type="submit"
                  value="Create account"
                />
                <input className="goggle_btn" type="submit" value="Google" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;