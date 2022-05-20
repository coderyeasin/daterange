import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "../../sass/style.scss";

const Login = () => {
  const navigate = useNavigate();
  const { handleGoogle, handleRegistration, errorsFire } = useFirebase();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleRegistration(data.email, data.password, data.name, navigate);
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
            <span>Log into your account</span>
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
            </div>

            <div className="form-group">
              <label htmlFor="g_pass">Your password</label>
              <input
                className="form-control"
                type="password"
                name="g_pass"
                {...register("g_password", { required: true })}
              />
            </div>

       <div className="form-group btn_group">
              <input
                className="account_btn"
                type="submit"
                value="Login"
              />
              <input
                onClick={handleGoogle}
                className="goggle_btn"
                type="submit"
                value="Google"
              />
            </div>
            <span className="user_connection">
              Create an account?
              <Link className="login_page" to="/register">
                Register
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
