import {connect} from 'react-redux'
import {onOpening, createSearch} from '../redux/action'
import { useEffect, useState ,useContext} from "react"
import { AppContext } from "../App"
import { addToStorage } from '../localStorangeFunc'



const SelectedCity = (props) =>{
    const {cityKey} = useContext(AppContext)
    const [userSearch,setUserSearch]= useState('')
    return(
        <div>
            <h3>{props.citiesApi.name}</h3><h4>{props.citiesApi.countryId}</h4>
                {props.weatherApi.map((e,i)=>{
                    return(
                    <div key={i}>
                        <p>{e.Temperature.Metric.Value} {e.Temperature.Metric.Unit}°</p>
                        <img src={`https://developer.accuweather.com/sites/default/files/${e.WeatherIcon>10?e.WeatherIcon:'0'+e.WeatherIcon}-s.png`} alt={e.WeatherText}></img>
                        <p>{e.WeatherText}</p>
                    </div>
                    )
                })}
        </div>
    )

}



const statePropsToState = (state)=>{
    return {
      citiesApi: state.cityName,
      weatherApi : state.cityWeather
    }
  } 
  const stateDispatchToProps = (dispatch)=>{
    return {
        callOnOpening: ()=>dispatch(onOpening()),
        createSearch: (e)=>dispatch(createSearch(e)),
    }
  } 
  
export default connect(statePropsToState,stateDispatchToProps)(SelectedCity)
