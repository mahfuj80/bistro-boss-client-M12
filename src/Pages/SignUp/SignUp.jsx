import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    //     watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result && result.user; // Check if result and result.user are defined

        if (loggedUser) {
          console.log('Logged user:', loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              // create user entry in the database
              const userInfo = {
                name: data?.name,
                email: data?.email,
              };
              axiosPublic.post('/users', userInfo).then((res) => {
                if (res?.data?.insertedId) {
                  console.log('user added to the database');
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Successfully Created',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/');
                }
              });
            })
            .catch((error) => {
              console.error('Error updating user profile:', error);
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        } else {
          console.error('User is undefined in the result object');
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error: User is undefined',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  //   console.log(watch('password'));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register('photoURL', { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register('email', { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    maxLength: 20,
                    minLength: 8,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-600">
                    Password Must Be 8 characters
                  </span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className="text-red-600">
                    Password have to in 20 characters
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className="text-red-600">
                    Password must have one uppercase, one lowercase and one
                    special character.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center pb-4">
              <small>Already Have an Account?</small>
              <Link to={'/login'}>Login Here.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
