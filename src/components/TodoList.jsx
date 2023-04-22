import { useSelector } from 'react-redux';

export const TodoList = () => {
   const todos = useSelector((state) => state.todosReducer);

   return (
      <div>
         <div>todos: {todos.length}</div>
      </div>
   );
};
