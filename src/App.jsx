import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
