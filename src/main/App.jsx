import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

//import Routes from './Routes'
import Main from '../components/templates/telaLogin/Main'
import MainCadastro from '../components/templates/telaCadastro/MainCadastro'
//import MainCadastro from '../components/templates/telaCadastro/MainCadastro'

export default props =>
    <BrowserRouter>
    <div className="app">
        <MainCadastro/>            
        
    </div>
    </BrowserRouter>