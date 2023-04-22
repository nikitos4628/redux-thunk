import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UserList } from './components/UserList';
import { TodoList } from './components/TodoList';

import { loadUsers } from './store/users/users-actions';
import { loadTodos } from './store/todos/todos-actions';

import './App.css';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadUsers());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      dispatch(loadTodos());
      // eslint-disable-next-line
   }, []);

   return (
      <div className='App'>
         <UserList />
         <TodoList />
      </div>
   );
}

export default App;
