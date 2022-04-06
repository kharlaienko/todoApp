import type { GetServerSidePropsContext, NextPage } from 'next';
import nookies from 'nookies';
import CreateTodoForm from '../components/CreateTodoForm';
import Layout from '../components/Layout';
import { Axios } from '../utils/api';
import { Todo } from '../utils/models/todo';

interface TodosProps {
   todos: Todo[];
}

const Home: NextPage<TodosProps> = ({ todos }) => {
   return (
      <Layout>
         <div>
            {todos.map(todo => (
               <p key={todo.id}>{todo.title}</p>
            ))}
         </div>
         <div className="mt-10 border-y border-solid border-white dark:border-slate-500  pb-5">
            <CreateTodoForm />
         </div>
      </Layout>
   );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
   const token = nookies.get(context)['token'];
   if (!token) {
      return {
         redirect: {
            permanent: false,
            destination: '/login',
         },
         props: {},
      };
   }

   let res: any;
   try {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

      res = await Axios.get('todos');
      console.log(res.data);
   } catch (e) {
      console.log(e);
   }
   return {
      props: {
         todos: res?.data || [],
      },
   };
};

export default Home;
