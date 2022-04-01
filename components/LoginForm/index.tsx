import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthApi, AuthResponse } from '../../utils/api/auth';
import { AuthLoginDTO } from '../../utils/api/types';
import Button from '../UI/Button';
import Input from '../UI/Input';

export interface LoginFormInputs {
   email: string;
   password: string;
}

const LoginForm: React.FC = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<LoginFormInputs>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      criteriaMode: 'firstError',
      shouldFocusError: true,
      delayError: undefined,
   });
   const [isLoading, setIsLoading] = useState(false);

   const router = useRouter();

   const submit: SubmitHandler<LoginFormInputs> = async data => {
      let response: AuthResponse;
      setIsLoading(true);
      try {
         response = await AuthApi.login(data);
         setCookie(null, 'token', response.access_token);
         router.push('/');
      } catch (e) {
         console.log('addhgdsjgfd', e);
      } finally {
         setIsLoading(false);
      }
   };
   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Email"
            {...register('email', { required: true, minLength: 3 })}
            errors={errors}
            errorMessage="Field is required"
         />
         <Input
            label="Password"
            {...register('password', { required: true, minLength: 8 })}
            errors={errors}
            errorMessage="Field is required. Min lenght is 8 symbols"
            className="mt-2"
            type={'password'}
         />

         <Button
            isLoading={isLoading}
            className={'mt-4 align-center ml-auto block bg-red'}
            onClick={() => console.log(123)}
         >
            Login
         </Button>
      </form>
   );
};

export default LoginForm;
