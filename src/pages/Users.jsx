import { USERS_API } from "../constanses";
import useFetch from "../hooks/useFetch";

const Users = () => {
  const [data, isError, isLoading] = useFetch(USERS_API);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Users</h1>
      {isError && <p>Failed to fetch data</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
