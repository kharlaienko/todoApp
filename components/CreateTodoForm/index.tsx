import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TodoApi } from '../../utils/api/todo';
import Button from '../UI/Button';
import Input from '../UI/Input';

export interface CreateTodoInputs {
   title: string;
   description: string;
}

const CreateTodoForm: React.FC = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm<CreateTodoInputs>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      criteriaMode: 'firstError',
      shouldFocusError: true,
      delayError: undefined,
   });

   const submit: SubmitHandler<CreateTodoInputs> = async data => {
      await TodoApi.create(data);
   };
   return (
      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-5 gap-x-5 items-end justify-between p-1">
         <Input
            placeholder="Read a book"
            className="col-span-2"
            label="What to do?"
            {...register('title', { required: true, minLength: 3 })}
            errors={errors}
            errorMessage="Min length is 3 characters"
         />

         <Input
            placeholder="Read 12 pages of The Harry Potter"
            className="col-span-2"
            label="Description"
            {...register('description')}
         />

         <Button className="w-fit flex">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 mr-2"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create
         </Button>
      </form>
   );
};

export default CreateTodoForm;
