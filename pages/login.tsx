import type { NextPage } from 'next';
import { useState } from 'react';
import Input from '../components/UI/Input';

const Login: NextPage = () => {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <div className="text-gray-200 h-screen flex flex-col justify-center items-center">
         {isLogin ? (
            <div className="border border-solid bg-zinc-700 p-3 rounded max-w-sm w-full">
               <form action="#">
                  <Input />
               </form>
               <button className="text-sm block ml-auto">Registration</button>
            </div>
         ) : (
            <div>
               <form action="#"></form>
            </div>
         )}
      </div>
   );
};

export default Login;
