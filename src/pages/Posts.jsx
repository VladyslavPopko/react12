import { POSTS_API } from "../constanses";
import useFetch from "../hooks/useFetch";


const Posts = () => {
    const [data, isError, isLoading] = useFetch(POSTS_API);

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

  return (
    <>
      <h1>Posts</h1>
      {isError && <p>Failed to fetch data</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
