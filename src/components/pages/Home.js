
import React, { Component } from 'react'
import Asset from '../Asset'
import Crypto from '../Crypto'
import AssetContainer from "../../style/AssetContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../layouts/Footer'
import CandleStickChart from '../CandleStickChart'
import GraphContainer from '../../style/GraphContainer'

class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isToggleOn: true,
        items: [],
        timeUpdated: null,
      }
      this.getTimeSeries = this.getTimeSeries.bind(this)
    }

    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }

    componentDidMount() {
      this.RequestAll()
      this.changeInterval()
    } 

    changeInterval(){
      this.myInterval = setInterval(() => {
        this.RequestAll()
      }, 30000);
    }

    componentWillUnmount(){
      clearInterval(this.myInterval)
    }

  RequestAll() {
    fetch('http://localhost:8080/assets', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'}})
    .then( res => res.json())
    .then(json => {
      this.setState({
        items: json._embedded.assetList,
        timeUpdated: new Date().toLocaleString('en-GB',{timeZone: 'UTC'})
      })
    });
  }

  getTimeSeries() {
    console.log("GET TIMER SERIES")
  }

  render() {
    console.log(this.state.items)
    var {count, items, response, requests, timeUpdated} = this.state;
    return(
      <div>
        <AssetContainer>
          <Asset name="USDJPY" asset={items[1]}/>
          <Asset name="GBPUSD" asset={items[2]}/>
          <Asset name="USDCHF" asset={items[3]}/>
          <Asset name="AUDUSD" asset={items[4]}/>
          <Asset name="USDCAD" asset={items[5]}/>
          <Asset name="EURUSD" asset={items[0]}/>
          <Asset name="NDZUSD" asset={items[6]}/>
          <Asset name="EURGBP" asset={items[7]}/>
          <Asset name="CADJPY" asset={items[8]}/>
          <Asset name="GBPAUD" asset={items[9]}/>
          <Asset name="GBPJPY" asset={items[10]}/>
          <Asset name="EURJPY" asset={items[11]}/>
          <Asset name="EURNZD" asset={items[12]}/>
          <Asset name="EURAUD" asset={items[13]}/>
          <Asset name="EURCHF" asset={items[14]}/>
          <Asset name="EURCAD" asset={items[15]}/>
          <Asset name="CHFJPY" asset={items[16]}/>
          <Asset name="AUDJPY" asset={items[17]}/>
          <Asset name="NZDJPY" asset={items[18]}/>
          <Asset name="GBPCHF" asset={items[19]}/>
          <Asset name="GBPCAD" asset={items[20]}/>
          <Crypto name="BTCUSD" asset={items[21]}/>
          <Crypto name="ETHUSD" asset={items[22]}/>
          <Crypto name="XRPUSD" asset={items[23]}/>
        </AssetContainer>
        <GraphContainer>
          <CandleStickChart/> 
        </GraphContainer>
        <Footer updated={timeUpdated}/>
      </div>
    )
  }
}

export default Home

