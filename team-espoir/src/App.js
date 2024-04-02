import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Main from './pages/Main';
import Home from "./pages/Home";



function App() {
  return (
    <>  
    
        <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="Home" element={<Home/>}></Route>
        </Routes>
      
    </>
  );
}
export default App;