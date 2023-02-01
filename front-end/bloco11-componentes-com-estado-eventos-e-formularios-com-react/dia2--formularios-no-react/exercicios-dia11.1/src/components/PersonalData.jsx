import React, { Component } from 'react';

export default class PersonalData extends Component {

    handleCityBlur = (event) => {
        
    }

  render() {
    return (
        <fieldset>
            <label htmlFor="name">Nome: </label>
            <input
                type="text"
                name='name'
                id='name'
                maxLength={40}
                required
                style={{textTransform: 'uppercase'}}
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input 
                type="email"
                name="email"
                id="email"
                maxLength={50}
                required
            />
            <br />
            <label htmlFor="cpf">CPF: </label>
            <input
                type="text"
                name='cpf'
                id='cpf'
                minLength={11}
                maxLength={11}
                required
            />
            <br />
            <label htmlFor="adress">Endereço: </label>
            <input
                type="text"
                name='adress'
                id='adress'
                maxLength={200}
                // remover caracteres especiais***
                required
            />
            <br />
            <label htmlFor="city">Cidade: </label>
            <input
                type="text"
                name='city'
                id='city'
                maxLength={28}
                onBlur
                // Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
                required
            />
            <br />
            <label htmlFor="state">Estado: </label>
            <select name="state" id="state" required>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ" selected>Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
            </select>
            <br />
            <input type="radio" name='houseOrApt' id='house' />
            <label htmlFor="house">Casa</label>
            <input type="radio" name='houseOrApt' id='apt' />
            <label htmlFor="apt">Apartamento</label>
        </fieldset>
    );
  }
}


// *** vi isso aqui no stackoverflow
// var desired = stringToReplace.replace(/[^\w\s]/gi, '')
//The caret (^) character is the negation of the set [...], gi say global and case-insensitive (the latter is a bit redundant but I wanted to mention it) and the safelist in this example is digits, word characters, underscores (\w) and whitespace (\s).