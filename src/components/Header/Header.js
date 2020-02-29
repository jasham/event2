import React, { Component } from 'react'
import styled from 'styled-components'
import { properties, fSize, fWeight } from '../../conf/properties'
import TextBox from '../../components/TextBox/TextBox'
import bgimage from '../../assets/images/25.jpg'
import nlogo from '../../assets/images/nlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"

const MainWrapper = styled.div`
  background-color : ${properties.white};
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  padding : 16px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const SubWrapper = styled.div`
  width: 90%;
  height: inherit;
  background-color : ${properties.white};
  display: flex;
  flex-direction: row;
  align-content: center;
`
const SubLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: blue; */
`
const SubRightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  /* background-color: green; */

`

const Logo = styled.div`
background-image: url(${props => props.nlogo});
background-size: cover;
height: 45px;
width: 143px;
line-height: 2rem;
vertical-align: bottom;
margin-right: .5rem;
cursor: pointer;
`
const MessageIconW = styled.div`
  width: 39px;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
  @media (max-width: 360px) {
  width: 19px;
}
`
const MessageIcon = styled.div`
  height: 100%;
  width: 100%;
  color: ${properties.lightGrey};
  align-items : center;
  cursor: pointer;
`
const MessageIconT = styled.div`
    width: 18px;
    height: 18px;
    background-color: #cd201f !important;
    display: flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    border-radius: 50%;
    font-size: 75%;
    font-weight: 600;
    text-align: center;
    position : relative;
    left : 8px;
    top : 1px;
    cursor: pointer;
`
const NotificationIconW = styled.div`
  width: 39px;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: blue; */
  @media (max-width: 360px) {
  width: 19px;
}
`
const NotificationIcon = styled.div`
  height: 100%;
  width: 100%;
  color: ${properties.lightGrey};
  align-items : center;
  cursor: pointer;
`

const NotificationIconT = styled.div`
  width: 18px;
  height: 18px;
  background-color: #467fcf !important;
  display: flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  border-radius: 50%;
  font-size: 75%;
  font-weight: 600;
  text-align: center;
  position : relative;
  left : 8px;
  top : 1px;    
  cursor: pointer;
`
const ProfileDIv = styled.div`
  /* width: 23.89%; */
  width: 143px;
  height: 100%;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
  @media (max-width: 600px) {
  width: 80px;
}
`
const ProfileDIvWrapper = styled.div`
  width: -webkit-fill-available;
  height: 100%;
  padding: 0px 0px 0px 12px;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
`
const ProfilePhoto = styled.div`
  width: 54px;
  height: 40px;
  background-image : url(${props => props.bgimage});
  background-size: cover;
  border-radius : 50%;
  cursor: pointer;
  /* background-color: black; */
  @media (max-width: 600px) {
  width: 40px;
}

`
const Profile = styled.div`
height: 100%;
width: -webkit-fill-available;
margin-left: 0.5rem !important;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: rebeccapurple; */
@media (max-width: 600px) {
  display: none;
}
`
const ProfileName = styled.div`
/* background-color: yellowgreen; */
height: 19px;
width: -webkit-fill-available;
font-size: ${fSize.medium};
color: ${properties.littleLightGrey};
cursor: pointer;
`
const Designation = styled.div`
/* background-color: violet; */
height: 19px;
width: -webkit-fill-available;
font-size: 13.125px;
cursor: pointer;
`
class Header extends Component {
  render() {
    return (
      <MainWrapper>
        <SubWrapper>
          <SubLeftWrapper>
            <Logo
              nlogo={nlogo}
            />
          </SubLeftWrapper>
          <SubRightWrapper>
            <MessageIconW>
              <MessageIcon>
                <MessageIconT color={properties.otherBlue}>
                  <TextBox
                    color={properties.white}
                    fontSize={fSize.sSmall}
                  >
                    27
                  </TextBox>
                </MessageIconT>
                <FontAwesomeIcon icon={faEnvelope} />
              </MessageIcon>
            </MessageIconW>
            <NotificationIconW>
              <NotificationIcon>
                <NotificationIconT color={properties.otherBlue}>
                  <TextBox
                    color={properties.white}
                    fontSize={fSize.sSmall}
                  >
                    6
                  </TextBox>
                </NotificationIconT>
                <FontAwesomeIcon icon={faBell} />
              </NotificationIcon>
            </NotificationIconW>
            <ProfileDIv>
              <ProfileDIvWrapper>
                <ProfilePhoto
                  bgimage={bgimage}
                />
                <Profile>
                  <ProfileName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.medium}
                    >
                      Jane Pearson
                    </TextBox>
                  </ProfileName>
                  <Designation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.lSmall}
                    >
                      Administrator
                    </TextBox>
                  </Designation>
                </Profile>
              </ProfileDIvWrapper>
            </ProfileDIv>
          </SubRightWrapper>
        </SubWrapper>
      </MainWrapper>
    )
  }
}


export default Header