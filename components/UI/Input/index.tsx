import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

const Input = React.forwardRef<
   HTMLInputElement,
   {
      label?: string;
      errors?: FieldErrors;
      errorMessage?: string;
      className?: string;
      type?: string;
      placeholder?: string;
   } & ReturnType<UseFormRegister<any>>
>(({ onChange, onBlur, name, label, errors, errorMessage, className, type, placeholder }, ref) => (
   <div className={className}>
      <label>{label}</label>
      <input
         name={name}
         ref={ref}
         onChange={onChange}
         onBlur={onBlur}
         type={type}
         placeholder={placeholder}
         className="w-full dark:bg-zinc-800 border dark:border-slate-500 focus:outline dark:outline-slate-500 p-2 block"
      />
      {errors && errors[name] && <p className="text-sm text-red-600">{errorMessage}</p>}
   </div>
));

export default Input;
