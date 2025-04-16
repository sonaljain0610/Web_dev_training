import Login from"./pages/Login";
import Register from"./pages/Register";
import Todo from"./pages/Todo";
function App(){
  return (
    <>
      <h1>App</h1>
      <Login/>
      <h1>Register</h1>
      <Register/>
      <h1>Todo List</h1>
      <Todo/>
    </>
  );
}

export default App;