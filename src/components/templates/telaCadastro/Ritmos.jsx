import './Ritmos.css'
import React from 'react'


export default props =>
    <div class="col-12 col-md-6">
        <div class="form">
            <label htmlFor="interesses"></label>
            <select id="interesses" name="interesses" multiple size="8">
                <option value="bachata">Bachata</option>
                <option value="bolero">Bolero</option>
                <option value="forro">Forró</option>
                <option value="salsa">Salsa</option>
                <option value="samba">Samba</option>
                <option value="sertanejo">Sertanejo Universitário</option>
                <option value="zouk">Zouk</option>
            </select>
        </div>
    </div>