import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "../../sass/style.scss";

const Register = () => {
  const { handleNewUser, handleGoogle, isErrors } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("password did not match");
      reset();
      return;
    }

    if (data.email, data.password, data.fullName, data.phone) {
      handleNewUser(data.email, data.password);
      navigate("/dashboard");
    }

    console.log(data);
    console.log(data.email, data.password);

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
            <p>{isErrors}</p>
            <div className="form-group my-3">
              <label htmlFor="fullName">Your email address</label>
              <input
                className="form-control"
                type="email"
                name="Email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <span className="d-block my-2 text-danger">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Your password</label>
              <input
                className="form-control"
                type="password"
                name="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum required is 6",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i,
                    message:
                      "Uppercase, lowercase, number, special character",
                  },
                })}
              />
              {errors.password && (
                <span className="d-block my-2 text-danger">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm password</label>
              <input
                className="form-control"
                type="password"
                name="Password"
                {...register("password2", {
                  required: "Confirm password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum required is 6",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i,
                    message: "Doesn't matched password",
                  },
                })}
              />
              {errors.password2 && (
                <span className="d-block my-2 text-danger">
                  {errors.password2.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Your full name</label>
              <input
                className="form-control"
                type="text"
                name="FullName"
                {...register("fullName", {
                  required: "Full Name is required",
                  minLength: {
                    value: 5,
                    message: "Min required length is 5",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum allowed length is 50",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]{2,30}$/i,
                    message: "Allowed only character",
                  },
                })}
              />
              {errors.fullName && (
                <span className="d-block my-2 text-danger">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="PhoneNumber">Your phone number</label>
              <input
                className="form-control"
                type="tel"
                name="PhoneNumber"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value:
                      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i,
                    message: "Invalid phone number, length:10",
                  },
                })}
              />
              {errors.phone && (
                <span className="d-block my-2 text-danger">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                name="agree_btn"
                id="agree_btn"
                {...register("agree", {
                  required: "Checkbox is required",
                })}
              />
              <label htmlFor="agree_btn" className="check_box">
                I read agree Terms and Conditions
              </label>
              {errors.agree && (
                <span className="d-block my-2 text-danger">
                  {errors.agree.message}
                </span>
              )}
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
