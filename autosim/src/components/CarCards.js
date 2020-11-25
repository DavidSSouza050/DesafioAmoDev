import React, { Component } from 'react';


import '../styles/components/cardCars.css';

export default class  CarCards extends Component {
    render(){
        return (

            <div className="card" key={this.props.id}>
                <div className="card-image">
                    <img src="https://s2.glbimg.com/vUqBOtO-TW1KmN9k1T04xnB90Lw=/0x0:620x413/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" alt={this.props.nameModel}/>
                </div>
                <div className="name-car">{this.props.nameModel}</div>
                <div className="properties">
                    <div className="properties-detail border-right">{this.props.yearModel}</div> 
                    <div className="properties-detail">{this.props.vehicleType}</div>
                    <div className="properties-detail border-right">{this.props.fuel}</div>
                    <div className="properties-detail">{Intl.NumberFormat('pt-br').format(this.props.km)} km</div>
                </div>
                <div className="price">
                    R$ 
                    <span>{Intl.NumberFormat('pt-br').format(this.props.priceFipe)}</span>
                </div>        

            </div>

        );
    }
}