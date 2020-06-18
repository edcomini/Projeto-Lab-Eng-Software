

import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

//import Home from '../components/templates/telaLogin'
//import TelaLogin from '../components/templates/telaLogin/TelaLogin'


import Nav from '../components/templates/telaLogin/Nav'
//import NavCadastro from '../components/templates/telaCadastro/NavCadastro'
//import UserCrud from '../components/user/UserCrud'

//Mapeamento entre as URLs e os componentes

//<Route path='/cadastro' component={NavCadastro}/>

export default props => 
    <Switch>
        <Route exact path='/' component={Nav}/>
        

    </Switch> 