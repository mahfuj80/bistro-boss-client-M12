import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch('email'));

  const { createUser } = useContext(AuthContext);

  //     e.preventDefault();
  //     const form = e.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(name);
  //     createUser(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
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
                name="email"
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
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
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
  );
};

export default SignUp;
