import "./App.css";
import Header from "./My_components/Header";
import { Footer } from "./My_components/Footer";
import { TodoItem } from "./My_components/TodoItem";
import { Todos } from "./My_components/Todos";

function App() {
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos />
      <TodoItem />
      <Footer />
    </>
  );
}

export default App;
