import React, { useState } from "react"
import './App.css';
import Crud from "./Crud";
import Welcome from "./Welcome";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/ErrorPage";
import { UserContext } from "./UserContext";

function App() {
const [globalUser, setGlobalUser] = useState(null)


return (
<UserContext.Provider value={{globalUser, setGlobalUser}}>
  {/* ///Router links anddata will be shown on every page, Routes will be shown when called */}
<Router>
<nav>
<Link to="/">Home</Link>
<Link to="/LogIn">LogIn</Link>
<Link to="/account">Account</Link>
</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<LogIn/>}/>
<Route path="/account/" element={<Account/>}/>
<Route path="/*" element={<ErrorPage/>}/>

</Routes>
<div><footer>Made by Matiss 2022 &copy;</footer></div>
</Router>
</UserContext.Provider>
  );
}

export default App;

