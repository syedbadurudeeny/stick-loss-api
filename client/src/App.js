import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Stocks from "./Stocks";
import Dashboard from "./Dashboard";
import RegisterPage from "./Auth-Crendentials/RegisterPage";
import LoginPage from "./Auth-Crendentials/LoginPage";


function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/stocks/analyze" element={<Stocks/>} /> 
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}

export default App;
