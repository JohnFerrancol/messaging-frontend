import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

import InputField from '../components/auth/InputField';
import { SubmitButton } from '../components/auth/Buttons';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { loginUser } = useAuth();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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
      const userData = await loginUser(formData);
      console.log(userData);
      if (userData.status === 'success') {
        navigate('/');
        setShowErrorMessage(false);
      } else if (userData.status === 'error') {
        setShowErrorMessage(true);
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: '',
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
          Log In to existing account
        </h2>
        {showErrorMessage && (
          <p className="text-lg py-2 bg-red-400 text-white font-semibold text-center rounded-md">
            Invalid Username or Password
          </p>
        )}
        <InputField
          id="username"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          borderColor={showErrorMessage ? 'border-red-400' : 'border-[#0BD953]'}
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          borderColor={showErrorMessage ? 'border-red-400' : 'border-[#0BD953]'}
        />

        <SubmitButton text="Log In" additionalClasses="py-3" />

        <p className="text-center text-lg">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="ml-1 text-[#0BD953] font-semibold text-lg hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
