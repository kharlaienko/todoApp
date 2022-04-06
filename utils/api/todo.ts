import { TodoCreateDTO } from './types';
import { Todo } from './../models/todo';
import { Axios } from './index';

export const TodoApi = {
   async create(dto: TodoCreateDTO): Promise<Todo[]> {
      const { data } = await Axios.post('todos', dto);
      return data;
   },
};
