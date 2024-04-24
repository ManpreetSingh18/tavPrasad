
import './App.css'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Error} from "./pages/Error"
import {Footer} from "./components/Footer/Footer";
import {Logout} from "./pages/logout";

const App= () =>{
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
