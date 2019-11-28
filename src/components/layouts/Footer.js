import React from 'react'
import FooterWrapper from'../../style/FooterWrapper'

function Footer(props) {
  return(
    <div align='center'>
      <FooterWrapper>
        Last Updated: {props.updated}
      </FooterWrapper>
    </div>
  )
}

export default Footer