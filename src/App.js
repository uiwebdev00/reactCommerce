import Aside from "./components/dashboard/Aside";
import Footer from "./components/dashboard/Footer";
import Nav from "./components/dashboard/Nav";
import {Routes,Route} from "react-router-dom";
import RouteConstants from "./RoutesConstant";
import Home from "./components/dashboard/Home";
function App() {
  return (
    <>
    
      <Routes>
        <Route path={RouteConstants.dashboard} element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
