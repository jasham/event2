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
import { constant } from '../../constants'  


  const MainWrapper = styled.div`
    padding : 16px 0px;
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
  const SubWrapper1 = styled.div`
    width: 58%;
    height: inherit;
    background-color: ${properties.bgGray};
    display: flex;
    flex-direction: row;
    /* padding: 0px 12px; */
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
  
  class Home extends Component {
    render() {
      return (
        <MainWrapper >
          <SubWrapper1>
            <Subw1In1>
              <Subw1In2>
                <Timeline>
                  <TextBox
                    color={properties.littleLightGrey}
                    fontSize={fSize.slarge}
                  >
                    Timeline
                      </TextBox>
                </Timeline>
                <SocialMedia>
                  <FbT>
  
                  </FbT>
                  <FbT>
  
                  </FbT>
                </SocialMedia>
              </Subw1In2>
            </Subw1In1>
  
          </SubWrapper1>
          <SubWrapper2>
            <Subw1In1>
              <Subw1In2>
                <Timeline>
                  <TextBox
                    color={properties.littleLightGrey}
                    fontSize={fSize.slarge}
                  >
                    Venue
                      </TextBox>
                </Timeline>
                <VenueImage turkeyistanbul={turkeyistanbul} />
                <VenueText>
                  <VenueHead>
                    <TextBox
                      color={properties.otherBlue}
                      fontSize={fSize.slarge}
                    >
                      Mediterranean Shipping Summit
                      </TextBox>
                  </VenueHead>
                  <VenueTimeLocation>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.slarge}
                    >
                      <VenueDivCon>
                        <VenueDivCon1>
                          <VenueDivCon11>
                            <TextBox
                              color={properties.littleLightGrey}
                              fontSize={fSize.slarge}
                            >
                              Region
                            </TextBox>
                          </VenueDivCon11>
                          <VenueDivCon11>
                            <TextBox
                              color={properties.otherBlue}
                              fontSize={fSize.medium}
                            >
                              Istanbul,Turkey
                             </TextBox>
                          </VenueDivCon11>
                        </VenueDivCon1>
                        <VenueDivCon1>
                          <VenueDivCon11>
                            <TextBox
                              color={properties.littleLightGrey}
                              fontSize={fSize.slarge}
                            >
                              Date
                            </TextBox>
                          </VenueDivCon11>
                          <VenueDivCon11>
                            <TextBox
                              color={properties.littleLightGrey}
                              fontSize={fSize.medium}
                            >
                              5 may 2020
                            </TextBox>
                          </VenueDivCon11>
                        </VenueDivCon1>
                      </VenueDivCon>
                    </TextBox>
                  </VenueTimeLocation>
                  <VenueDescription>
                    <TextBox
                      color={properties.black}
                      fontSize={fSize.sMedium}
                    >
                      Description
                      </TextBox>
                  </VenueDescription>
                  <VenueContent>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.medium}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos doloribus eum fugiat itaque laboriosam maiores nisi nostrum perspiciatis vero.
                      </TextBox>
                  </VenueContent>
                </VenueText>
                <Map>
                  <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </Map>
              </Subw1In2>
            </Subw1In1>
          </SubWrapper2>
        
        </MainWrapper> 
      )
    }
  }
  
  export default Home