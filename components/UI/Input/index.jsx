import React from 'react';

const Input = () => {
   return (
      <div>
         <input
            type="email"
            name="email"
            autoComplete="email"
            className="w-full bg-zinc-800 border dark:border-slate-500 focus:outline dark:outline-slate-500 p-2"
         />
      </div>
   );
};

export default Input;
