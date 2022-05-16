import React from 'react';
// import { Button, Container, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from '../../Hooks/useFirebase';
// import feature from "../../images/feature_img.jpg";
import './Register.css'


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
        <div className="d-flex justify-content-between align-items-center register_user">
          <div className="feature_image">
            <h3>Choose a date range</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos iure
              quis perspiciatis, consequatur amet.
            </p>
          </div>
          <div className="signup_form">
  
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
              <div className="form-group my-3">
                <label
                  htmlFor="fullName"
                  className="my-2"
                  style={{ color: "#8492a6" }}
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
                  className="my-2"
                  style={{ color: "#8492a6" }}
                >
                  Your password
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="g_pass"
                  {...register("email", { required: true })}
                />
                {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)}
              </div>
              <div className="form-group">
                <label
                  htmlFor="c_pass"
                  className="my-2"
                  style={{ color: "#8492a6" }}
                >
                  Confirm password
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="c_pass"
                  {...register("email", { required: true })}
                />
                {errors.Password &&
                  errors.Password.type === "required" &&
                  errorMessage(required)}
              </div>
              <div className="form-group">
                <label
                  htmlFor="fullName"
                  className="my-2"
                  style={{ color: "#8492a6" }}
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
                  className="my-2"
                  style={{ color: "#8492a6" }}
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
                  className="my-2 ms-3"
                  style={{ fontWeight: "bold" }}
                >
                  I read agree Terms and Conditions
                </label>
              </div>
              <div className="form-group">
                <input
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#00affd",
                    border: "none",
                    outline: "none",
                  }}
                  type="submit"
                  value="Create account"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;