import React, { Component } from 'react';
import request from 'request';

import TrumpetBoard from './trumpetBoard';
import LandlordBoard from './landlordBoard';

class App extends Component {
    constructor(){
        super();

        this.state = {

        };
    }

    componentDidMount(){
        request(options, this.callback);
    }

    callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("IT WORKS");
        }
    }


  render() {
    return (
      <div className="App">
          APKA
          {/*<LandlordBoard/>*/}
          {/*<TrumpetBoard/>*/}
      </div>
    );
  }
}

export default App;
