import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="linkCadastro ">
       <nave className="menu ">
           <Link to="">
               <i className="/"></i> Esqueci Senha
           </Link>
           <br/>
           <Link to="/">
               <i className=" "></i> Cadastrar
           </Link>
       </nave>
    </aside>
    