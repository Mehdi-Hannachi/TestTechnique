import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "./JS/actions/pokemonsActions";
import Home from "./pages/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
