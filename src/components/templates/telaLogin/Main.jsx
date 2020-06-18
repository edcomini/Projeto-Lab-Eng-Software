import './Main.css'
import React from 'react'
import Header from './Header'
import Nav from './Nav'




export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="login container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>

            <div className="col-12 d-flex justify-content-center ">
                <div className="form-group d-flex justify-content-center">
                    <input type="text" className="form-control"
                        placeholder="E-mail..." />
                </div>
            </div>


            <div className="col-12 d-flex justify-content-center">
                <div className="form-group">
                    <input type="text" className="form-control"
                        placeholder="Senha..." />
                </div>
            </div>


            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-primary">
                        Login
                        </button>
                </div>
            </div>

        </main>
        <Nav {...props} />
    </React.Fragment>
