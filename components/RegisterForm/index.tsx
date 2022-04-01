import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthApi, AuthResponse } from '../../utils/api/auth';
import Button from '../UI/Button';
import Input from '../UI/Input';

export interface RegisterFormInputs {
   email: string;
   userName: string;
   password: string;
}

const RegisterForm: React.FC = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<RegisterFormInputs>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      criteriaMode: 'firstError',
      shouldFocusError: true,
      delayError: undefined,
   });

   const [isLoading, setIsLoading] = useState(false);

   const router = useRouter();

   const submit: SubmitHandler<RegisterFormInputs> = async data => {
      let response: AuthResponse;
      setIsLoading(true);
      try {
         response = await AuthApi.register(data);
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
            type={'email'}
            {...register('email', { required: true, minLength: 3 })}
            errors={errors}
            errorMessage="Field is required"
         />

         <Input
            label="Full Name"
            {...register('userName', { required: true, minLength: 3 })}
            errors={errors}
            errorMessage="Field is required"
            className="mt-2"
         />

         <Input
            label="Password"
            {...register('password', { required: true, minLength: 8 })}
            errors={errors}
            type={'password'}
            errorMessage="Field is required. Min lenght is 8 symbols"
            className="mt-2"
         />

         <Button isLoading={isLoading} className={'mt-4 align-center ml-auto block bg-red'}>
            Register
         </Button>
      </form>
   );
};

export default RegisterForm;
