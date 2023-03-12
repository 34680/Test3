import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import './index.css';
import DetailsMovies from "./components/DetailsMovie";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/details" element={<DetailsMovies/>}></Route>
            <Route path="/add" element={<AddMovie/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    );
}

export default App;