import React from 'react';
import './homepage.scss';
//import converter from '../utils/converter.js';
import Heading from '../components/heading';

class Homepage extends React.Component {
  render(){
    return(
      <div className="main">
        <Heading />
        <textarea rows="20" cols="50" placeholder="copy array here"></textarea>
        <button>OK</button>
        
      </div>
    )
  }
}

export default Homepage;