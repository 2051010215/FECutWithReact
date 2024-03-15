import React from 'react'
import Navbar from './navBar'
import background from '../../assets/topBG.jpg'
import backgroundMacNew from '../../assets/contextmg/MacNew.png'
import backgroundShopNow from '../../assets/contextmg/ShopNow.png'
import backgroundArrival from '../../assets/contextmg/arrival.png'
import backgroundArrivalShadow from '../../assets/contextmg/arrival-shadow.png'
import backgroundYellowVector from '../../assets/contextmg/Yellow-Vector.png'
import backgroundBigAvatar from '../../assets/contextmg/big-avatar.png'
import backgroundBigAvatarName from '../../assets/contextmg/big-avatar-name.png'
import styled from 'styled-components'
import { Container } from '../../styles/styledModul'
import { specialSets } from '../../assets/dtb/specialSetsDB'

const StyledHeader = styled.div`
    height: auto;  
`

const Header = () => {
    return (
        <StyledHeader style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            position: 'relative',
            isolation: 'isolate',
        }}>
            <Navbar />
            <Container style={{ marginTop: "64px", display: "flex", gap: '14.5px' }}>
                <div style={{ isolation: 'isolate' }}>
                    <div style={{ display: 'flex', }}>
                        <div style={{ position: 'relative' }}>
                            <img src={backgroundMacNew} alt='Mac' />
                            <img src={backgroundShopNow} alt='Shop now' style={{
                                position: 'absolute',
                                paddingLeft: '200px',
                                marginTop: "-25px"
                            }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src={backgroundArrival} alt='Mac' style={{ position: 'absolute' }} />
                            <img src={backgroundArrivalShadow} alt='Mac' style={{
                                marginTop: '-24.25px',
                                marginLeft: '24.25px',
                            }} />
                        </div>
                    </div>
                    <img src={backgroundYellowVector} alt='YellowVector' style={{
                        position: 'absolute',
                        zIndex: '-10',
                        marginLeft: '-160px',
                        marginTop: '85px',
                        width: '100%'
                    }} />
                    <div style={{ display: 'flex', gap: '5%', marginTop: '13%', }}>
                        {specialSets.map((item) => (
                            <div key={item.tilte}>
                                <a href={item.link}><img src={item.img} alt={item.tilte} /></a>
                                <h3 style={{
                                    textAlign: 'center',
                                    color: '#17161A',
                                    fontFamily: `${props => props.theme.fontFamily.fontRoboTo}`,
                                }}>{item.tilte}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={backgroundBigAvatarName} style={{
                        position: 'absolute',
                        alignItems: 'end',
                        marginTop: '100%',
                        marginLeft: '58px'
                    }} alt='AvatarName' />
                    <h1 style={{
                        position: 'absolute',
                        fontSize: '72px',
                        fontFamily: 'monospace',
                        marginTop: '430px',
                        marginLeft: '100px'
                    }}>THE DJ</h1>
                    <img src={backgroundBigAvatar} alt='Avatar' />
                </div>
            </Container>
        </StyledHeader>
    )
}

export default Header