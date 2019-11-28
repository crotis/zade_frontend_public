import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class CandleStickChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
        options: {
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      series: [{
        data: [],
      }]
    }
  }

  requestTimeSeries(asset) {
      var urlp1="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
      var urlp2="&interval=15min&apikey=9N3FI89QZ9GCQ1WN"
      var url = urlp1 + asset + urlp2

      fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'}})
      .then( res => res.json())
      .then(json => {
        delete json['Meta Data']
        const map = new Map(Object.entries(json))
        var dataS = []

        dataS = Object.entries(json["Time Series (15min)"]).map(([key, value]) => ({
        x: new Date(key),
        y: Object.values(value)
        }))
        var data2 = dataS.map( dataS => ({ ...dataS, y: dataS.y.slice(0,4)}))
        var data3 = data2.slice(0,50)
        this.setState({
          series: [{
                data: data3
              }]
        })
      });
  }

  render() {
  console.log(this.state.selectedAsset)
    return (
      <div>
        {this.renderCardSelector()}
        <div id="chart" >
          <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height="400" width="1200" />
        </div>
      </div>
    );
  }

  renderCardSelector(){
    return(
      <div className="form-group top-margin-small" >
          <label className="card-selector-label">Select Asset</label>
          <select className="card-selector form-control" 
          onChange={(e) => {this.requestTimeSeries(e.target.value)}} 
          >
            <option></option>
            <option> EURUSD </option> 
            <option> USDJPY </option> 
            <option> GBPUSD </option> 
            <option> USDCHF </option> 
            <option> AUDUSD </option> 
            <option> USDCAD </option> 
            <option> NDZUSD </option> 
            <option> EURGBP </option> 
            <option> CADJPY </option> 
            <option> GBPAUD </option> 
            <option> GBPJPY </option>
            <option> EURJPY </option>
            <option> EURNZD </option>
            <option> EURAUD </option>
            <option> EURCHF </option>
            <option> EURCAD </option>
            <option> CHFJPY </option>
            <option> AUDJPY </option>
            <option> NZDJPY </option>
            <option> GBPCHF </option>
            <option> GBPCAD </option>
            <option> BTCUSD </option>
            <option> ETHUSD </option>
            <option> XRPUSD </option>
          </select>
      </div>
    )
  }
}

export default CandleStickChart