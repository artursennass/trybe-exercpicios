import React from 'react';

// pratica
// import AboutMe from './About';

// class App extends React.Component {
//   render() {
//     return <AboutMe />;
//   }
// }


//exercicio 1 e 2
// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const toDoList = ['dormir', 'mestrado', 'estudar', 'fazer prova']

// class App extends React.Component {
//   render() {
//     return toDoList.map((task) => Task(task));
//   }
// }


// exercicio 3

import Header from './Header-exercise3';
import Content from './Content-exercise3';
import Footer from './Footer-exercise3';

class App extends React.Component {
  render() {
    return (
      <body>
      <header className='header'>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
      </body>
    );
  }
}


export default App;