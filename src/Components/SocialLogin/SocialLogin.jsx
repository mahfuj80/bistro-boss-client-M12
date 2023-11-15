import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <div className="divider py-0"></div>
      <div className="text-center p-8">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
