import Aside from "./components/dashboard/Aside";
import Footer from "./components/dashboard/Footer";
import Nav from "./components/dashboard/Nav";
import {Routes,Route} from "react-router-dom";
import RouteConstants from "./RoutesConstant";
import Home from "./components/dashboard/Home";
import Login from "./components/dashboard/Login";
import Register from "./components/dashboard/Register";
import Auth from "./components/dashboard/Auth";
function App() {
  return (
    <>
    
      <Routes>
    
        <Route path={RouteConstants.login} element={<Login></Login>}></Route>
        <Route path={RouteConstants.signup} element={<Register></Register>}></Route>
        <Route element={<Auth></Auth>}>
          <Route path={'/dashboard/*'} element={<Home></Home>}></Route>
        
        </Route>
        
       
      </Routes>
    </>
  );
}

export default App;
