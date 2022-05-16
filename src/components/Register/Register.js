import React from 'react';
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from '../../Hooks/useFirebase';

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
        <h3>Register here</h3>
        <Button variant="primary" onClick={handleGoogle}>
          Google
        </Button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    );
};

export default Register;