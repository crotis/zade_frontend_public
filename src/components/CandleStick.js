import React, { Component } from 'react';
import CandleStickChart from './CandleStickChart'
import GraphContainer from '../style/GraphContainer'

class CandleStick extends Component {
  render() {
    return(
      <div>
        <GraphContainer>
          <CandleStickChart /> 
        </GraphContainer>
      </div>
    )
  }
}

export default CandleStick