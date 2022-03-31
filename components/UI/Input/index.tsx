import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

const Input = React.forwardRef<
   HTMLInputElement,
   {
      label?: string;
      errors?: FieldErrors;
      errorMessage?: string;
   } & ReturnType<UseFormRegister<any>>
>(({ onChange, onBlur, name, label, errors, errorMessage }, ref) => (
   <>
      <label>{label}</label>
      <input
         name={name}
         ref={ref}
         onChange={onChange}
         onBlur={onBlur}
         className="w-full bg-zinc-800 border dark:border-slate-500 focus:outline dark:outline-slate-500 p-2 block"
      />
      {errors && errors[name] && <p className="text-sm text-red-600">{errorMessage}</p>}
   </>
));

export default Input;
