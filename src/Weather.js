import React, {Component, Fragment} from 'react';
//const url='http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44';

class Weather extends Component{
    state={
        temp:'  ',
        windspeed:' ',
        pressure:'',
        clouds:''

    }
    getweather=(e)=>{
        let city=document.querySelector("form").selcity.value;
        let country=document.querySelector("form").selcountry.value;

        e.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`).then(response=>{
            return response.json()}).then(
                data=>{
                   // console.log(data);
                    city=== '' && country === '' ? 
                      alert("you should select the country and the city !!!")
                        :
                        this.setState({temp:data.main.temp,
                            windspeed:data.wind.speed,
                            pressure:data.main.pressure,
                            clouds:data.clouds.all
                        })
                        
                   // console.log(this.state);
                }
            )
          
          //  console.log(city);
        
    }

    list=()=>{
        return(
            <Fragment>
            <li className="list-group-item bg-secondary mb-2 text-white" >The tempreture is : {this.state.temp}</li>
            <li className="list-group-item bg-secondary mb-2 text-white" >The speed of the wind is : {this.state.windspeed}</li>
            <li className="list-group-item bg-secondary mb-2 text-white" >The pressure is : {this.state.pressure}</li>
            <li className="list-group-item bg-secondary  text-white" >The clouds is : {this.state.clouds}</li>
            </Fragment>
            )
    }
    render(){
        return(
            <div className="container">
                <form className="form-inline w-100 mt-5" name="form1">
                    <select className="custom-select w-25" name="selcountry">
                       <option value="">--select--</option>
                        <option>syria</option>
                        <option>egypt</option>
                        <option>iraq</option>
                    </select>
                    <select className="custom-select w-25" name="selcity">
                        <option value="">--select--</option>
                        <option>damascus</option>
                        <option>cairo</option>
                        <option>bagdad</option>
                    </select>
                    <button className="btn btn-outline-info" onClick={(e)=>{this.getweather(e)}}>expect the weather</button>

                </form>
                <ul className="list-group mt-5 " id="allcourse">
                          {this.list()}
                </ul>
            </div>
        )
    }


}

export default Weather;