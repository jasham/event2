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
import ReactSearchBox from 'react-search-box'

const MainWrapper = styled.div`
  padding : 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: ${properties.bgGray};
`
const SW1 = styled.div`
  height: 38px;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  @media (max-width: 600px) {
  flex-direction: column;
  margin: 0px 24px;
  height: auto;
  }
`
const SW1W = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
  width: 100%;
  flex-direction: column;
  }
`

const SW11 = styled.div`
  height: 100%;
  width: 196px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  @media (max-width: 600px) {
  height: 32px;
  margin-bottom: 12px;
  width: 140px;
  }
`
const SW12 = styled.div`
  width: 196px;
  padding: 0px 12px;
`
const ButtonSign = styled.button`
  width: 100%;
  height: 38px;
  background-color: ${properties.otherBlue};
  border-radius: 5px;
  cursor: pointer;
`
const SW13 = styled.div`
  width: 100%;
  margin-right: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 600px) {
  padding-top: 10px;
  width: 100%;
  justify-content: flex-start;
  }
`
const SW13B = styled.div`
  height: 38px;
  @media (max-width: 600px) {
    width: 100%;
    padding-left:12px;
    padding-right:12px;
    margin-bottom: 24px;}
`

let SW2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* @media (max-width:743px) {
    flex-direction: column;
     align-items: center;
     
  } */
`
const SW2W = styled.div`
  height: 212px;
  width: 360px;
  padding-right : 10px;
  display:flex;
  margin-bottom : 10px;
  @media (max-width:743px) {
    width:60%;
  }
  @media (max-width:600px) {
    width:80%;
  }
  @media (max-width:400px) {
    width:90%;
  }
`
const SW2B = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 24px;
  border : 1px solid rgba(0, 40, 100, 0.12);
  display: flex;
  flex-direction: column;
   @media (max-width:600px) {
    width:100%;
    padding: 12px;
  }
   @media (max-width:400px) {
    width:100%;
  }
`
const SW2BC1 = styled.div`
  height: 70%;
  display: flex;
  flex-direction: row;
  
`
const SW2BC1Photo = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content:center;
`
const PhotoBox = styled.div`
  width: 64px;
  height: 64px;
  background-image : url(${props => props.turkeyistanbul});
  background-size: cover;
  border-radius : 50%;
  cursor: pointer;
`

const SW2BC1Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction:column;
  
`
const DetailsName = styled.div`
  height: 50%;
`
const DetailsDesignation = styled.div`
  height: auto;
`
const DetailsCompany = styled.div`
  height: auto;
`

const SW2BC1Status = styled.div`
  width: 20%;
  display:flex;
  justify-content: center;
`

const SW2BC2 = styled.div`
  height: 30%;
`
const ChatButton = styled.button`
width: auto;
height: 26px;
background-color: ${properties.white};
border-radius: 5px;
margin: 10px;
cursor: pointer;
`
const ProfileButton = styled.button`
width: auto;
height: 26px;
background-color: ${properties.white};
border-radius: 5px;
cursor: pointer;
`
const SW3 = styled.div`
  height: 20px;
  width: 100%;
  text-align:right;
  padding-right: 10%;
`

class Attendees extends Component {
  render() {
    return (
      <MainWrapper >
        <SW1>
          <SW1W>
            <SW11>
              <TextBox
                color={properties.lightGrey}
                fontSize={fSize.medium}>
                1-18 of 413 people
            </TextBox>
            </SW11>
            <SW12>
              <ButtonSign> <TextBox
                ffamily={"regular"}
                color={properties.white}
                fontSize={fSize.mSmall}>
                Filter Company Type
              </TextBox></ButtonSign>
            </SW12>
          </SW1W>
          <SW1W>
            <SW13>
              <SW13B>
                <ReactSearchBox
                  placeholder="Search .."
                  value=""
                  data={this.data}
                  callback={record => console.log(record)} />
              </SW13B>
            </SW13>
          </SW1W>
        </SW1>
        <SW2>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          {/* <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W><SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W>
          <SW2W>
            <SW2B>
              <SW2BC1>
                <SW2BC1Photo>
                  <PhotoBox turkeyistanbul={turkeyistanbul} />
                </SW2BC1Photo>
                <SW2BC1Details>
                  <DetailsName>
                    <TextBox
                      color={properties.littleLightGrey}
                      fontSize={fSize.mlarge}>
                      Jane Pearson
                    </TextBox>
                  </DetailsName>
                  <DetailsDesignation>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Position
                    </TextBox>
                  </DetailsDesignation>
                  <DetailsCompany>
                    <TextBox
                      color={properties.lightGrey}
                      fontSize={fSize.medium}>
                      Company Name
                    </TextBox>
                  </DetailsCompany>
                </SW2BC1Details>
                <SW2BC1Status>
                  <TextBox
                    color={properties.lightGrey}
                    fontSize={fSize.sSmall}>
                    Offline
                    </TextBox>
                </SW2BC1Status>
              </SW2BC1>
              <SW2BC2>
                <ChatButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Chat
                 </TextBox></ChatButton>
                <ProfileButton> <TextBox
                  ffamily={"regular"}
                  color={properties.littleLightGrey}
                  fontSize={fSize.small}>
                  Profile
                 </TextBox></ProfileButton>
              </SW2BC2>
            </SW2B>
          </SW2W> */}

        </SW2>
        <SW3>
          Number of pages selection !!
        </SW3>
      </MainWrapper>
    )
  }
}

export default Attendees