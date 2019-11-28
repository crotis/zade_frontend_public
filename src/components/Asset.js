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
