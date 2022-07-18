import React, { Component } from "react";

class AboutMe extends Component {
    render() {
        const skills = ["HTML", 'CSS', 'JavaScript', 'ES6', 'DOM', 'HOFs', 'API', 'React'] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

        return (
            <div>
                <h1>Artur Senna</h1>
                <p>Algo Sobre mim...</p>
                <h2>Minhas Habilidades</h2>
                <ol>{jsxSkills}</ol>
            </div>
        )
    }
}

export default AboutMe;