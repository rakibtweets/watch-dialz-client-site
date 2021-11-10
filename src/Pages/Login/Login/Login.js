import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { signWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="container container-md container-lg form-area mt-5  mx-auto">
        <form
          className="d-block d-flex flex-column mx-auto w-75 p-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center">Login</h2>
          <input
            type="text"
            placeholder="Your name"
            className="form-control form-control-lg  form-control-md "
            {...register('name', { required: true, maxLength: 80 })}
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            className="form-control form-control-lg  form-control-md"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <div className="media-login  d-block d-flex flex-column mx-auto px-5 w-75 ">
          <h4 className="text-center">Or</h4>
          <button onClick={signWithGoogle} className="btn google-btn py-2">
            Login With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
