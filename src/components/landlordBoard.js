import React, { Component } from 'react';
import Slider from 'react-slick';
import {setting} from './sliderSettings.js';

let arra = [1,2,3,4,5,6,7,8,9];

class LandlordBoard extends Component {


    render() {

        let players = arra.map((e, index) => {
            let rank;

            if(e===1){
                rank = (<img src="./medal_gold.png" alt="medal-ico" className="medal circle-img"/>)
            }

            else if(e === 2){
                rank = (<img src="./medal_silver.png" alt="medal-ico" className="medal circle-img"/>)
            }

            else if (e===3){
                rank = (<img src="./medal_bronze.png" alt="medal-ico" className="medal circle-img"/>)
            }

            else{
                rank = (<span className="rank-numb">#{e}</span>)
            }

            return(
                <div key={index} className="single-player-wrapper">
                    <div className="new-player"></div>
                    <div className="single-player single-player-landlord">
                        {rank}
                        <img src="./woman.jpg" alt="player-avatar" className="avatar circle-img"/>
                        <span className="player-name player-info-text">John Snowssssasd</span>
                        <span className="player-cash player-info-text">$5 032 321 3299 123 123</span>

                    </div>
                </div>
            )
        });

        return (
            <div className="Landlord-board Board-container">
                <div className="board-header landlord-header">
                    <span className="header-text">
                        LANDLORD <br/>
                        WORLD RANK LIST
                    </span>
                    <div className="header-logo-wrapper">
                        <img src="./landlord_logo.png" className="landlord-logo" />
                    </div>
                </div>

                <div className="slider-wrapper">
                    <Slider {...setting} className="slider-wrapper-landlord">
                        {players}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default LandlordBoard;
