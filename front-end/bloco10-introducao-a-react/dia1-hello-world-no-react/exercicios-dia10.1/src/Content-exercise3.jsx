import React, { Component } from "react";

class Content extends Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];

          
        return (
            <ul key="listContent" className="ul-content">
                {conteudos.map((e, i) => <li className="content">O conteúdo é: {e.conteudo} || Status: {e.status} || Bloco: {e.bloco}</li>)}
            </ul>
        )
    }
}
