import useFetch from "../hooks/useFetch";
import { TODOS_API } from "../constanses";

const Todos = () => {
  const [data, isError, isLoading] = useFetch(TODOS_API);

    if (isLoading) {
      return <h1>Loading...</h1>;
    }


  return (
    <>
      <h1>Todos</h1>
      {isError && <p>Failed to fetch data</p>}
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
