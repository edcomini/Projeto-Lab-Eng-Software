import './MainCadastro.css'
import React from 'react'
import Header from './Header'
import NavCadastro from './NavCadastro'
import Ritmos from './Ritmos'


export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="cadastro container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>

            <div className="card-body">
                <form action="" class="container-fluid">
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="nome">Nome</label><br/>
                                <input type="text" class="form-control" id="nome" placeholder="Informe o nome..." />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="telefone">Telefone</label> <br/>
                                <input type="tel" name="telefone" placeholder="(00) 0 0000-0000"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="nascimento">Data de nascimento</label> <br/>
                                <input type="date" name="nascimento" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="email">E-mail</label> <br/>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">@</span>
                                    </div>
                                    <input type="email" class="form-control" id="email" placeholder="informe o e-mail"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="altura">Altura</label> <br/>
                                <input type="number" name="altura" id="altura" placeholder="Informe a altura"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-radio">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                            <input type="radio" name="tipo" value="aluno" /> Aluno(a)
                            <input type="radio" name="tipo" value="professor" /> Professor(a)                             
                            </div>
                        </div>
                    </div>
                    <div className="escolherRitmos">
                        <button>Quais ritmos deseja ?</button>                       
                    </div>
                    <div className="form-row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="senha">Senha</label> <br/>
                            <input type="password" name="senha" id="senha" placeholder="senha de 8 dígitos"/>                           
                            </div>
                        </div>
                    </div>


                </form>

            </div>

        </main>
        <NavCadastro {...props} />
    </React.Fragment>

