import React, {
  Component
} from 'react'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import turkeyistanbul from '../../assets/images/turkeyistanbul.png'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'
import styled from 'styled-components'
import {
  GoogleMap, Marker, withScriptjs,
  withGoogleMap
} from "react-google-maps"

import HomePage  from '../HomePage'
import Attendees from '../AttendeesPage'
import Speakers from '../SpeakersPage'
import MyMeetings from '../MyMeetingsPage'
import MessagesPage from '../MessagesPage'

const MainWrapper = styled.div`
  padding : 24px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  background-color: ${properties.bgGray};
  @media (max-width: 990px) {
  flex-direction: column;
  align-items: center;
}
`
const SubWrapper = styled.div`
  width: 93%;
  height: auto;
  background-color : ${properties.white};
  display: flex;
  flex-direction: row;
  align-content: center;
`


const SubWrapper1 = styled.div`
  width: 60%;
  height: inherit;
  background-color: ${properties.bgGray};
  display: flex;
  flex-direction: row;
  padding: 0px 12px;
  @media (max-width: 990px) {
  padding-bottom: 24px;
  width: 70%;
}
`
const SubWrapper2 = styled.div`
  width: 30%;
  height: inherit;
  background-color: ${properties.bgGray};
  display: flex;
  flex-direction: row;
  padding: 0px 12px;
  @media (max-width: 990px) {
  width: 70%;
  height: 1000px;
}
`
const Subw1In1 = styled.div`
  width: 100%;
  height: inherit;
  background-color: ${properties.bgGray};
  display: flex;
  flex-direction: row;
  padding: 0px 12px;
`
const Subw1In2 = styled.div`
  border : 1px solid rgba(0, 40, 100, 0.12);
  width: inherit;
  height: inherit;
  background-color : ${properties.white};
  display: flex;
  flex-direction: column;
`
const Timeline = styled.div`
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  height: 56px;
  padding-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SocialMedia = styled.div`
  height: 100%;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 0px 12px;
`
const FbT = styled.div`
  width: 50%;
  height: 784px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
`
const VenueImage = styled.div`
  background-image: url(${props => props.turkeyistanbul});
  background-size: cover;
  height: 280px;
  cursor: pointer;
`
const VenueTimeLocation = styled.div`
  width: 100%;
  
`
const VenueText = styled.div`
  height: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const VenueHead = styled.div`
  width: 100%;
  padding-bottom:24px;
  cursor: pointer;
`
const VenueDivCon = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 500px) {
  width: 100%;
  display:flex;
  flex-direction: column;
  
}
`
const VenueDivCon1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`
const VenueDivCon11 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
`
const VenueDescription = styled.div`
  width: 100%;
  align-items: left;
  padding-bottom: 10px;
  padding-top: 12px;
  `
const VenueContent = styled.div`

  `
const Map = styled.div`
  /* width: 100%; */
  `
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));

class Main extends Component {
  state = {
    menuItemName : 'Home'
  }

  showPage = () => {
    switch(this.state.menuItemName){
      case 'Home' :
        return <HomePage />
      case 'Attendees' :
        return <Attendees />
      case 'Speakers' :
        return <Speakers />
      case 'My Meetings':
        return <MyMeetings />
      case 'Messages' :
        return <MessagesPage />
    }
  }

  onClickMenuItem = (menuItemName,index) => {
    console.log("Issue data",menuItemName,index)
    this.setState({ menuItemName })
  }

  render() {
    return (
      <div>
          <Header />
          <HeaderDown 
            onClickMenuItem={this.onClickMenuItem}
          />
          {this.showPage()}
          <Footer />
          <FooterDown />
      </div >
    )
  }
}

export default Main