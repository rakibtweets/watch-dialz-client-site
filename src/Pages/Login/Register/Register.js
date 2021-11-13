import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
  const { signWithGoogle, registerNewUser, authError, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signWithGoogle(location, history);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, password2 } = data;
    if (password !== password2) {
      swal('Error!', 'Password does not match', 'warning');
      return;
    }
    registerNewUser(name, email, password, history);
    reset();
  };
  return (
    <>
      <div className="h-100 register-banner pb-5 ">
        <div className="container pt-5  mx-auto  bg-transparent">
          <form
            className="d-block d-flex flex-column mx-auto px-5 w-75 pb-3 login-content"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-center fw-bold py-4 text-white">Register</h2>
            {isLoading ? (
              <Spinner
                className="container-fluid text-center"
                animation="grow"
                variant="danger"
                size="5em"
              />
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="form-control form-control-lg  form-control-md "
                  {...register('name', { required: true, maxLength: 80 })}
                />
                <br />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg  form-control-md"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <br />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control form-control-lg  form-control-md "
                  {...register('password', { required: true, maxLength: 20 })}
                />
                <br />
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control form-control-lg  form-control-md "
                  {...register('password2', { required: true, maxLength: 20 })}
                />
                <br />
                {errors.password2 && (
                  <span className="text-danger">This field is required</span>
                )}
                {authError && (
                  <span className="text-danger py-2">{authError}</span>
                )}

                <button
                  className="btn btn-primary w-100 d-block mt-2"
                  type="submit"
                >
                  Register
                </button>
                <p className="py-3 text-center text-white">
                  All ready have an account?{' '}
                  <Link to="/login">Please Login</Link>
                </p>
              </div>
            )}
          </form>
          <div className="media-login  d-block d-flex flex-column mx-auto px-5 w-75 pb-5 ">
            <h4 className="text-center fw-bold text-info">OR</h4>
            <button
              onClick={handleGoogleSignIn}
              className="btn google-btn py-2"
            >
              <FcGoogle className="fs-3 me-2" /> Login With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
