import React, { useEffect, useState}  from 'react';

import CarCards from '../components/CarCards';

import api from '../services/api';

import '../styles/pages/cars.css';

export default function Cars(){

    //stanciando o array de carros
    const [ cars, setCars ] = useState([]);

    //executando a requisição para api
    useEffect(() => {
        api.get('listAllActive').then(response => {
        setCars(response.data.data);
        });
    }, []);

    return (
        <div id="container">
            {cars.map(car => (

                <CarCards
                    id={car.id}
                    nameModel={car.nameModel}
                    yearModel={car.yearModel}
                    vehicleType={car.vehicleType}
                    fuel={car.fuel}
                    km={car.km}
                    priceFipe={car.priceFipe}
                />

            ))}
        </div>
        
    );
}