import React, { Component } from 'react';
import request from 'request';

import TrumpetBoard from './trumpetBoard';
import LandlordBoard from './landlordBoard';

const landlordCnfg = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-fs-token': 'EAAJoICyMBvgBADCZBcOXueIbTWFOpS3rTTY7ZCNRO1OprjmX9jfrZBVxKy7mPh0e6xy0ZCRHIAmlY1a1YKCtWrxbSHh7eBJbs9W31R9ZCi8dVbnjTDGoD42U4q5pCItuO6K4kf1qHujdDalBkYZAdZAR1K5iqwdfZC21ZAvrybKl9dbtBGOdlGuV7iCK5oq6EJOAXHvXNMgTiOtZCfpWUlQ0XZA5umttbfADfgZD',
    }
};
const landlordUrl = "https://api.wearerealitygames.com/landlord/competitors/league";

const options = {
    url: 'https://api.wearerealitygames.com/trumpet/competitors/league',
    headers: {
        'x-fs-token': 'EAAK0AhmwcL8BAGKpc80tHhmXRj2ezsBuPiAZBvdEyQJRKGfZAhIp50Imw3th56nFO6ZA17U8CnHHB1ZBCZBJxDjQtB4e81eDtljdnqYYSa65ZBcX6BLQGjRbfgco6vDIyfkBNBSZCLybaZA8hRNlsR63OSGZBNyACqm1F19bsA1ub8kfatLB38pekmTEo80dOWaFamcWJu1VgjUisDCO6SnSon9LFV3oMiucZD'
    }
}

const trumpetCnfg = {
    headers: {'x-fs-token': 'EAAK0AhmwcL8BAGKpc80tHhmXRj2ezsBuPiAZBvdEyQJRKGfZAhIp50Imw3th56nFO6ZA17U8CnHHB1ZBCZBJxDjQtB4e81eDtljdnqYYSa65ZBcX6BLQGjRbfgco6vDIyfkBNBSZCLybaZA8hRNlsR63OSGZBNyACqm1F19bsA1ub8kfatLB38pekmTEo80dOWaFamcWJu1VgjUisDCO6SnSon9LFV3oMiucZD'}
};
const trumpetUrl = "https://api.wearerealitygames.com/trumpet/competitors/league";

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

    // getLandlordBoard(url, header){
    //
    //
    //     request.get(url, {
    //         'auth': {
    //             'x-fs-token': 'EAAJoICyMBvgBADCZBcOXueIbTWFOpS3rTTY7ZCNRO1OprjmX9jfrZBVxKy7mPh0e6xy0ZCRHIAmlY1a1YKCtWrxbSHh7eBJbs9W31R9ZCi8dVbnjTDGoD42U4q5pCItuO6K4kf1qHujdDalBkYZAdZAR1K5iqwdfZC21ZAvrybKl9dbtBGOdlGuV7iCK5oq6EJOAXHvXNMgTiOtZCfpWUlQ0XZA5umttbfADfgZD'
    //         }
    //     }, function (error, response, body) {
    //         console.log('error:', error); // Print the error if one occurred
    //         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //         console.log('body:', body); // Print the HTML for the Google homepage.
    //     });
    // }

    // getData(url1,header1, url2, header2){
    //
    //     // axios.all([
    //     //     axios.get(firstrequest),
    //     //     axios.get(secondrequest),
    //     //     axios.get(thirdrequest)])
    //     //
    //     //     .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
    //     //         console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    //     //     })
    //     //     .catch(error => console.log(error));
    //
    //
    // }

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
