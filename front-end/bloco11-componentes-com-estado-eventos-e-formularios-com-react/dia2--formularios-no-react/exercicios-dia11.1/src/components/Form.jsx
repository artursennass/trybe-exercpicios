import React, { Component } from 'react';
import PersonalData from './PersonalData'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        <form>
            <PersonalData />
        </form>
    );
  }
}
