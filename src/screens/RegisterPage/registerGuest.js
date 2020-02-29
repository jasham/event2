import React, {
    Component
  } from 'react'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import favicon from '../../assets/images/favicon.png'
import guser from '../../assets/images/guser.png'
import puser from '../../assets/images/puser.png'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'
import styled from 'styled-components'
import { CustomInput } from '../../components/Input'
import CustomLabel from '../../components/CustomLabelCustomTextbox'

const MainWrapper = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    top : 0;
    left :0;
    background-color : #f5f7fb;
    display : flex;
    justify-content : center;
    align-items : center;
`
const SubWrapper = styled.div`
    width : 85%;
    height : 600px;
    /* background-color : #FFFFFF; */
`
const SubWrapperHeader = styled.div`
    height : 70px;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    /* background-color : red; */
`

const IconImage = styled.div`
    background-image : url(${favicon});
    background-repeat : no-repeat;
    background-size : contain;
    height : 60px;
    width : 60px;
`
const SubWrapperBody = styled.div`
    width : 100%;
    height : 80%;
    /* background-color : red; */
    margin-top : 25px;
    border: 1px solid rgba(0, 40, 100, 0.12);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background-color : #FFFFFF;
    border-radius : 3px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const SubWrapperInsideBody = styled.div`
  width : 97%;
  height : 92%;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
  /* background-color : red; */
`
const BodyHeader = styled.div`

`

const LeftRightWrapper = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  width : 100%;
  height : 90%;
`

const LeftWrapper = styled.div`
  width : 70%;
  height : 100%;
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
  /* background-color : red; */
`

const RightWrapper = styled.div`
  width : 30%;
  height : 100%;
  background-color : green;
`
const BodyRow = styled.div`
  width : 100%;
  height : 70px;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  /* background-color : blue; */
`

const InsideBodyHeader = styled.div`
  width : 100%;
  height : 50px;
  /* background-color : orange; */
`

const CellWrapper = styled.div`
  width : 45%;
`

class Register extends Component {

  state = {
    formFields : [
      { label : "Name", type : "text", value : ""},
      { label : "Last Name", type : "text", value : ""},
      { label : "Position", type : "text", value : ""},
      { label : "Company", type : "text", value : ""},
      { label : "Email Address", type : "text", value : ""},
      { label : "Phone Number", type : "text", value : ""},
      { label : "Country", type : "text", value : ""},
      { label : "Select Company Type", type : "dropdown", value : ""},
      { label : "Password", type : "text", value : ""},
      { label : "Confirm Password", type : "text", value : ""}
    ]
  }
  render() {
    return (
      <MainWrapper>
          <SubWrapper>
              <SubWrapperHeader>
                  <IconImage />
              </SubWrapperHeader>
                <SubWrapperBody>
                  <SubWrapperInsideBody>
                    <InsideBodyHeader>
                      <TextBox
                        ffamily={"regular"}
                        fontSize={"medium"}
                      >
                      Sign Up
                      </TextBox>
                    </InsideBodyHeader>
                    <LeftRightWrapper>
                      <LeftWrapper>
                        {
                          this.state.formFields.map((data) => {
                            return(
                              <CellWrapper>
                                <CustomLabel 
                                    label={data.label}
                                    height={"40px"}
                                    text={data.type}
                                    dropdownValue={[]}
                                  />
                              </CellWrapper>
                            )
                          })
                        }  
                      </LeftWrapper>
                      <RightWrapper>

                      </RightWrapper>
                    </LeftRightWrapper>
                  </SubWrapperInsideBody>
              </SubWrapperBody>
          </SubWrapper>
      </MainWrapper>
    )
  }
}
  
export default Register