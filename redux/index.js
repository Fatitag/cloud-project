//import React from 'react';
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Compteur from "./compteur";
import Login from "./verifier";
import Inscription from "./inscription";
import Ver from "./inscription";
import LongCaracters from './paseword';
import ComposentPrincipale from './myComposants/principalCompos';
import Formul from './control';
import  TestUseEffect from './testuseEffect';
import LireApi from './testAxios';
import { BrowserRouter, Link, Routes } from "react-router-dom";
import Home from "./routertest/home";
import About from "./routertest/about";
import Blog from "./routertest/blog";
import { Route } from "react-router-dom";
import App2 from "./hokPersonnel";
import Reducer1 from "./redux";
import { Provider } from "react-redux";
import App4 from "./app4";
import store from './store'





class Liste extends React.Component{
  constructor(props){
    super(props)
    this.state={code:1,color:"red",s:false}
  }
  changeColor=()=>{
    this.setState({code:this.state.code+1,color:'blue'})
  }
  render(){
    return <div>
      <ul>
        <li style={{backgroundColor:this.state.color}}>
          code {this.state.code}
        </li>
        
      </ul>
      <button onClick={this.changeColor}>Click ici</button>
    </div>
  }
}

function AppRouter(){
  return <div>
    <h1>Menu</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </div>
  </div>
}

 



const element=document.getElementById("root");
const root=ReactDOM.createRoot(element)
root.render(
  // {/* // <BrowserRouter> */}
  // {/* //   <AppRouter /> */}
  // {/* // </BrowserRouter> */}
  <>
  <Provider store={store} >
    <App4/>
  </Provider>
     </>
    )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
