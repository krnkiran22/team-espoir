import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Main from './pages/Main';
import Home from "./pages/Home";
import Navigationbar from "./pages/Navigationbar";


function App() {
  return (
    <>  
        <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="/home" element={<div><Navigationbar/><Home/></div>}></Route>
        </Routes>
      
    </>
  );
}
export default App;