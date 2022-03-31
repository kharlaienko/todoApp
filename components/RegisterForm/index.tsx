import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../UI/Input';

export interface RegisterFormInputs {
   email: string;
   fullName: string;
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

   const submit: SubmitHandler<RegisterFormInputs> = data => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Email"
            {...register('email', { required: true, minLength: 3 })}
            errors={errors}
            errorMessage="Field is required"
         />

         <button type="submit">Register</button>
      </form>
   );
};

export default RegisterForm;
