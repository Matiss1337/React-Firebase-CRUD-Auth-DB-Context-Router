import React, { useState } from "react"
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/ErrorPage";
import { UserContext } from "./UserContext";
import Nav from "./Nav";

function App() {
const [globalUser, setGlobalUser] = useState(null)


return (
<UserContext.Provider value={{globalUser, setGlobalUser}}>
  {/* ///Router links anddata will be shown on every page, Routes will be shown when called */}
<Router>
<Nav/>
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

