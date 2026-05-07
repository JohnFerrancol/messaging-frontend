import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

import InputField from '../components/auth/InputField';
import { SubmitButton } from '../components/auth/Buttons';

const RegisterPage = () => {
  const { registerUser } = useAuth();
  const [errorsArray, setErrorsArray] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    'confirm-password': '',
  });

  const usernameError = errorsArray.find((error) => error.path === 'username');
  const passwordError = errorsArray.find((error) => error.path === 'password');
  const confirmPasswordError = errorsArray.find((error) => error.path === 'confirm-password');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await registerUser(formData);
      if (userData.status === 'success') {
        navigate('/');
        setErrorsArray([]);
      } else if (userData.status === 'error') {
        setErrorsArray(userData.errorArray);
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: '',
          'confirm-password': '',
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center p-20">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 w-1/3 h-full bg-[#1f2c34] px-8 py-5 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl text-[#0BD953] font-semibold text-center">
          Register a new account
        </h2>

        <InputField
          id="username"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          borderColor={usernameError ? 'border-red-400' : 'border-[#0BD953]'}
        />
        {usernameError && <p className="text-md text-red-400 font-semibold">{usernameError.msg}</p>}
        <InputField
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          borderColor={passwordError ? 'border-red-400' : 'border-[#0BD953]'}
        />
        {passwordError && <p className="text-md text-red-400 font-semibold">{passwordError.msg}</p>}
        <InputField
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          value={formData['confirm-password']}
          onChange={handleChange}
          borderColor={confirmPasswordError ? 'border-red-400' : 'border-[#0BD953]'}
        />
        {confirmPasswordError && (
          <p className="text-md text-red-400 font-semibold">{confirmPasswordError.msg}</p>
        )}

        <SubmitButton text="Register" additionalClasses="py-3" />

        <p className="text-center text-lg">
          Have an Account?{' '}
          <Link to="/login" className="ml-1 text-[#0BD953] font-semibold text-lg hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
