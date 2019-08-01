import React, { Component } from 'react';
import axios from 'axios';
import  {getLocation} from './actions/index';
import { connect } from 'react-redux';

class GetWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            city: '',
            type: '',
            lon: '',
            lang: '',
            cities: ['Delhi','Chennai','Bengaluru','Mumbai','Mysore']
        }

    }

    getPosts = () => {
        let API_KEY = 'YOUR API KEY';
        let URL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}`;
        let icon;

        axios.get(URL)
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data));
                console.log(data);
                this.setState({
                    weather: {
                        city: data.city.name,

                        temp1: data.list[0].main.temp,
                        type1: data.list[0].weather[0].description,
                        spd1: data.list[0].wind.speed,
                        pres1: data.list[0].main.pressure,
                        icon1: data.list[0].weather[0].icon,

                        temp2: data.list[8].main.temp,
                        type2: data.list[8].weather[0].description,
                        spd2: data.list[8].wind.speed,
                        pres2: data.list[8].main.pressure,
                        icon2: data.list[8].weather[0].icon,

                        temp3: data.list[16].main.temp,
                        type3: data.list[16].weather[0].description,
                        spd3: data.list[16].wind.speed,
                        pres3: data.list[16].main.pressure,
                        icon3: data.list[16].weather[0].icon,

                        temp4: data.list[24].main.temp,
                        type4: data.list[24].weather[0].description,
                        spd4: data.list[24].wind.speed,
                        pres4: data.list[24].main.pressure,
                        icon4: data.list[24].weather[0].icon,

                        temp5: data.list[32].main.temp,
                        type5: data.list[32].weather[0].description,
                        spd5: data.list[32].wind.speed,
                        pres5: data.list[32].main.pressure,
                        icon5: data.list[32].weather[0].icon,

                        temp6: data.list[39].main.temp,
                        type6: data.list[39].weather[0].description,
                        spd6: data.list[39].wind.speed,
                        pres6: data.list[39].main.pressure,
                        icon6: data.list[39].weather[0].icon,

                        lat: data.city.coord.lat,
                        lon: data.city.coord.lon

                    }
                })
                let citylist = this.state.cities.slice();
                if(!citylist.includes(data.city.name)){
                    citylist.push(data.city.name)
                    this.setState(
                        {
                        cities : citylist
                        }
                    )
                }
            })

           
    }

    handleChange = event => {
        this.setState(
           
            { city: event.target.value }
        );
    }

    handleSelect = event => {
        this.setState(
            { city: event.target.value }
        );
        this.forceUpdate();
        this.getPosts();
    }
    getWeather = position => {
        let long = localStorage.getItem("long");
        console.log(localStorage.getItem("long"))
        let lat = localStorage.getItem("lat");
        let API_KEY = '043854b9d41a4b66a5592a859a0ab44f';
        let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`;
        let data;
        let city_name;


        axios.get(URL).then(
            response => {
                data = JSON.parse(JSON.stringify(response.data));
                
                city_name = data.city.name;
                console.log(city_name);
                this.setState({
                    city: city_name
                })
            }
        )
        this.getPosts();
    }

    getOptions = () => {
        const elements = this.state.cities.map(
            city => <option value={city}>{city}</option>
        )
        return elements;

    }

    deleteCity = () => {
        this.state.cities.splice(this.state.cities.indexOf(document.getElementById('a').value),1)
        this.forceUpdate();
    }


    render() {
        console.log(this.state.weather);
        const elements = this.getOptions();
        if (this.state.weather) {
            return (
                <div className='container'>
                    <input type='text'class="form-control" placeholder="Enter City" onChange={this.handleChange} value={this.state.city}></input> <br/>
                    <button onClick={this.getPosts}  class="btn btn-primary" disabled={this.state.city === ''} ><i class="fa fa-sun-o" ></i> Get Weather</button>
                    &nbsp; &nbsp;
                    <button onClick={this.getWeather}  class="btn btn-warning" ><i class="fa fa-map-marker"></i> Current Location</button>
                    &nbsp; &nbsp;&nbsp; &nbsp;
                    <select id='a' onClick={this.getPosts} onChange={this.handleChange} >
                                {elements}
                    </select>
                    &nbsp; &nbsp;
                    <button onClick={this.deleteCity} class="btn btn-danger" ><i class="fa fa-trash"></i> Delete </button>


                    <div className='row '>
                        <div className='col'>
                            <br/>
                            <h3> {this.state.weather.city} </h3> <br />
                            Coordinates : lat: {this.state.weather.lat} long: {this.state.weather.lon} <br />
                            <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon1}@2x.png`} /> <br />
                            Temp: {(this.state.weather.temp1 - 273).toFixed(2)} degree<br />
                            Wind Speed: {this.state.weather.spd1} m/s <br />
                            Pressure: {this.state.weather.pres1} hpa <br />
                            Weather Type : {this.state.weather.type1}<br />

                        </div>
                


                    </div>
                    <hr />
                    <div className='row'>
                        &nbsp; Predictions
                    </div>
                    <div className='row'>
                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon2}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp2 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd2} m/s <br />
                        weatherType : {this.state.weather.type2}<br />
                        Pressure: {this.state.weather.pres2} hpa <br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon3}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp3 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd3} m/s <br />
                        weatherType : {this.state.weather.type3}<br />
                        Pressure: {this.state.weather.pres3} hpa <br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon4}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp4 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd4} m/s <br />
                        weatherType : {this.state.weather.type4}<br />
                        Pressure: {this.state.weather.pres4} hpa <br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon5}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp5 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd5} m/s <br />
                        weatherType : {this.state.weather.type5}<br />
                        Pressure: {this.state.weather.pres5} hpa <br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon6}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp6 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd6} m/s <br />
                        weatherType : {this.state.weather.type6}<br />
                        Pressure: {this.state.weather.pres6} hpa <br />


                    </div>
                </div>
                </div >
            )
        }
    }

}

const mapStateToProps = state => {
    return {books: state.location};
};


export default connect(mapStateToProps, { getLocation })(GetWeather);
