import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
  const { signWithGoogle } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="container form-area mt-5  mx-auto">
        <form
          className="d-block d-flex flex-column p-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center">Login</h2>
          <input
            type="text"
            placeholder="Your name"
            className="form-control"
            {...register('name', { required: true, maxLength: 80 })}
          />
          <br />

          <input
            type="text"
            placeholder="Email"
            className="form-control"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />

          <input className="btn btn-primary" type="submit" />
        </form>
        <div className="media-login  d-block d-flex flex-column p-5 ">
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
