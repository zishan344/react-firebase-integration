import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import useFirebase from "./hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
