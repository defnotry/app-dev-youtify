import { Link } from 'react-router-dom';
import Header from '../components/sections/Header';
import InputField from '../components/sections/InputField';
import 'react-toastify/dist/ReactToastify.css';

function Login() {


  return (
    <div className='vh-100 text-white c-bg'>
        {/* Ensure ToastContainer is rendered at the top level */}
        
      <Header />
      <div className='login template d-flex vh-100 justify-content-center align-items-center'>
        <div className='form-container'>
          <form>
            <h1 className='text-center t-font mb-3'>Log in to Youtify</h1>
            <InputField 
                label='Email' 
                type='email' 
                placeholder='Enter Email' 
            />
            <InputField 
                label='Password' 
                type='password' 
                placeholder='Enter Password' 
            />
            <div className='d-flex w-100 justify-content-center w-100%'>
              <button className='btn btn-color rounded-pill mb-2 mt-4 w-50'>Log In</button>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <p className='text-center mt-2'>Do not have an account yet?</p>
              <Link to="/signup" className='ms-2 link-color'>Sign up now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
