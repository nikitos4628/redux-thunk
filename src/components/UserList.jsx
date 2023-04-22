import { useSelector } from 'react-redux';

export const UserList = () => {
   const users = useSelector((state) => state.usersReducer);

   return (
      <div>
         <div>users: {users.length}</div>
      </div>
   );
};
