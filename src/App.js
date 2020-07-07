import React from "react";
import "./App.scss";
import Login from "./pages/Login";
import Header from "./components/Header";
import AddWatch from './pages/AddWatch'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch,Link, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container">
                    <div className="wrapper">
                        <div className="home">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route
                                    exact
                                    path="/gallery"
                                    component={Gallery}
                                />
                                <Route
                                    exact
                                    path="/solutions"
                                    component={AddWatch}
                                />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={Signup}
                                />
                                  
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
      
    );
}

function handleClick(event)
{
   var temp=document.getElementById('text').value;
   sessionStorage.setItem('temp',temp);
   document.getElementById('disp').innerText=temp;
  
}


function Home() {
    function downloadPdf(e)
    {
        
    }
    return (
        <div className="container">
           
            <div className="wrapper">
                <Link className='btn btn-dark btn-lg bg-dark' target='_blank' to='/Bolt IoT Student Internship Program.pdf' onClick={(e)=>{downloadPdf(e)}}>Download Pdf</Link>
                <h5>
                    The <b>WATCHER</b>, is a creative, engineer driven, global
                    agency working on creating state of the art watches,
                    advertising and preserving them.
                </h5>
                <br/>
                <br/>
               <div className="">
               <input id='text' className="form-control-sm" type="text"/> &nbsp;
                <button onClick={e=>{handleClick(e)}}type='button' className='btn btn-dark btn-sm'>Save string</button>
    <h5 style={{marginTop:'10px'}}id='disp' className='form-group'>{sessionStorage.getItem('temp')}</h5>
               </div>
            </div>
        </div>
    );
}
export default App;
