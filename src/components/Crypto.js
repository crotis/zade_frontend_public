import React, {Component} from 'react';
import Wrapper from "../style/Wrapper"

class Crypto extends Component {
    constructor(props) {
        super()
        this.state = {
        }
    }
    
    render() {
        return (
        this.props.asset ?
            <Wrapper dailyChange={this.props.asset.dailyChange}>
                <div>
                    <div class="left">
                        <p class="asset">{this.props.asset.asset}</p>
                    </div>
                    <div class="right">
                        <p class="price"> {this.props.asset.price}</p>
                    </div>
                </div>
            </Wrapper>
        :
            <p></p>
        );
    }
}

export default Crypto;
    