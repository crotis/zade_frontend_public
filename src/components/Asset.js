import React, {Component} from 'react';
import Wrapper from "../style/Wrapper"
import { Link } from 'react-router-dom'

class Asset extends Component {
    constructor(props) {
        super()
        this.state = {
            items: []
        }
    }

    getTimeSeries(){
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NZDUSD&interval=15min&apikey=PK8MU25UFH60FM8G', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'}})
        .then( res => res.json())
        .then(json => {
          this.setState({
            items: json['Time Series (15min)']
          })
        });
        console.log(this.state.items)
    }
    
    render() {
        return (
        this.props.asset ?        
            <Wrapper dailyChange={this.props.asset.dailyChange}>
                <div>
                    <div class="left">
                        <p class="asset">{this.props.asset.asset}</p>
                        <p class="open">O {this.props.asset.todaysOpen}</p>
                        <p class="high">H {this.props.asset.todaysHigh}</p>
                        <p class="low">L {this.props.asset.todaysLow}</p>
                    </div>
                    <div class="right">
                        <p class="price"> {this.props.asset.price}</p>
                        <p class="change">{this.props.asset.dailyChange}%</p>
                    </div>
                </div>
            </Wrapper>
        :
            <p></p>
        );
    }
}
    
export default Asset;