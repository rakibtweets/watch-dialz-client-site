import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css';

const Register = () => {
  const { signWithGoogle, registerNewUser } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('~ data', data);
    const { name, email, password, password2 } = data;
    if (password !== password2) {
      alert('Password does not match');
      return;
    }
    registerNewUser(name, email, password, history);
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
          <h2 className="text-center">Registration</h2>
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
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control form-control-lg  form-control-md "
            {...register('password', { required: true, maxLength: 20 })}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control form-control-lg  form-control-md "
            {...register('password2', { required: true, maxLength: 20 })}
          />
          <br />

          <button className="btn btn-primary" type="submit">
            Register
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

export default Register;
