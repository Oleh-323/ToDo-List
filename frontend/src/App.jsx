import Auth from "./pages/Auth";
import TodoList from "./pages/TodoList";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api/auth";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const {data: user, isLoading, error} = useQuery
  ({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    enabled: !!token,
    retry: false
  });

  if(!token){
    return <><Auth /></>
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    localStorage.removeItem("token");

    return <Auth />;
  }

  return (
    <> 
      <h2>Hello, {user.name}</h2>
      <button className="logout" onClick={logout}>
          Logout
      </button>
      <TodoList />
    </>
  );

}

export default App;
