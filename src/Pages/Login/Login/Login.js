import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { signWithGoogle, loginUser, authError, isLoading } = useAuth();

  const handleGoogleSignIn = () => {
    signWithGoogle(location, history);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password, location, history);
  };
  return (
    <>
      <div className="container-fluid text-center banner-img pb-5">
        <div className="container pt-5  mx-auto bg-transparent ">
          <form
            className=" d-block d-flex flex-column mx-auto px-5 w-75 pb-3 text-center login-content text-white "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-center py-3 fw-bold">Login</h2>
            {isLoading ? (
              <Spinner
                className="container-fluid text-center"
                animation="border"
                variant="danger"
                size="5em"
              />
            ) : (
              <div>
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

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control form-control-lg  form-control-md "
                  {...register('password', { required: true, maxLength: 80 })}
                />
                <br />

                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />
                {authError && (
                  <span className="text-danger py-3">{authError}</span>
                )}

                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <p className="py-3 text-center">
                  Don't have an account?{' '}
                  <Link to="/register">Create an Account</Link>
                </p>
              </div>
            )}
          </form>
          <div className="media-login  d-block d-flex flex-column mx-auto px-5 w-75 pb-5">
            <h4 className="text-center fw-bold text-success">OR</h4>
            <button
              onClick={handleGoogleSignIn}
              className="btn google-btn py-2"
            >
              <FcGoogle className="fs-3 me-2" /> Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
