
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import AddService from './Components/AddService/AddService';
import ManageService from './Components/ManageService/ManageService';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
        <Route path="/services" element={<RequireAuth><Services></Services></RequireAuth>}></Route>
        <Route path="/addservice" element={<RequireAuth><AddService></AddService></RequireAuth>}></Route>
        <Route path="/manageservice" element={<RequireAuth><ManageService></ManageService></RequireAuth>}></Route>
        
        
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
