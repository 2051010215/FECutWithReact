import React from 'react'
import { Button, Container } from '../../styles/styledModul'

const Footer = () => {
  return (
    <Container>
      <div style={{ paddingBlock: '5%', display: 'flex', gap: '25%' }}>
        <div style={{ display: 'flex', gap: '60%', width: '40%' }}>
          <div>
            NAVIGATION
            <div>Nav1</div>
            <div>Nav2</div>
            <div>Nav3</div>
          </div>
          <div>
            CONTACT US
            <div>Contact1</div>
            <div>Contact2</div>
            <div>Contact3</div>
          </div>
        </div>

        <div>
          SUBCRICE TO RECIEVE OUR LASTEST UPDATE
          <input type='email' placeholder='Your email here...' style={{ height: '44px', width: '350px' }}></input>
          <Button style={{ height: '44px' }}>Subcrice</Button>
        </div>
      </div>
    </Container>
  )
}

export default Footer