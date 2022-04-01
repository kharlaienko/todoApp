import type { NextPage } from 'next';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import ButtonText from '../components/UI/ButtonText';

const Login: NextPage = () => {
   const [isLogin, setIsLogin] = useState(true);

   const changeForm = () => {
      setIsLogin(!isLogin);
   };

   return (
      <div className="text-gray-200 h-screen flex flex-col justify-center items-center">
         <div className="border border-solid bg-zinc-700 p-3 rounded max-w-sm w-full">
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <ButtonText className="text-sm block mx-auto" onClick={changeForm}>
               {isLogin ? 'Registration' : 'Back to Login'}
            </ButtonText>
         </div>
      </div>
   );
};

export default Login;
