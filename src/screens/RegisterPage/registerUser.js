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
import { connect } from 'react-redux'
import { CustomInput } from '../../components/Input'
import CustomLabel from '../../components/CustomLabelCustomTextbox'
import DropdownChoice from '../../components/DropdownChoice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,  } from "@fortawesome/free-regular-svg-icons"
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
const UpperWrapper = styled.div`
  width : 100%;
  height : 200px;
  /* background-color : orange; */
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`

const ImageBox = styled.div`
  width : 160px;
  height : 160px;
  border-radius : 80px;
  background-color : #F2F4F6;
  box-shadow : 0px 0px 5px 2px rgba(0,0,0,0.2);
  background-image : url(${props => props.imagePath});
  background-repeat : no-repeat;
  background-size : contain;
  display :flex;
  justify-content : center;
  align-items : center;
`

const ImageIcon = styled.div`
  position : relative;
  /* background-color : red; */
  width : 40px;
  height : 40px;
  top : -30px;
  left : 80px;
`

class RegisterUser extends Component {

  state = {
    formFields : [
      { label : "Name", type : "text", value : "",placeholder:"Name"},
      { label : "Last Name", type : "text", value : "",placeholder:"Last Name"},
      { label : "Position", type : "text", value : "",placeholder:"Position"},
      { label : "Company", type : "text", value : "",placeholder:"Company"},
      { label : "Email Address", type : "text", value : "",placeholder:"Email Address"},
      { label : "Phone Number", type : "text", value : "",placeholder:"Phone Number"},
      { label : "Country", type : "text", value : "",placeholder:"Country"},
      { label : "Select Company Type", type : "dropdown", value : "",placeholder:"Select Company Type", options : [
        {
          key: 'SO',
          text: 'Ship-owners',
          value: 'Ship-owners'
        },
        {
          key: 'SY',
          text: 'Shipyards',
          value: 'Shipyards'
        },
        {
          key: 'PR',
          text: 'Ports',
          value: 'Ports'
        },
        {
          key: 'EP',
          text: 'Eqipments Provider',
          value: 'Eqipments Provider'
        }
      ]},,
      { label : "Password", type : "text", value : "",placeholder:"Password"},
      { label : "Select User Type", type : "text", value : "",placeholder:"Select User Type"},
      { label : "Confirm Password", type : "text", value : "",placeholder:"Confirm Password"},
      { label : "Agreement Number", type : "text", value : "",placeholder:"Agreement Number"},
    ],
    
  
  }
  onChangeTextBox=(e,index)=>{
   let { formFields} = this.state
   formFields[index].value = e.target.value
  this.setState({ formFields })
  }

  render() {
    console.log(this.state.formFields,"this.state.formFields")
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
                          this.state.formFields.map((data,index) => {
                            if(data.type==="text"){
                            return(
                       <CellWrapper>
                                {/* {data.type==="text"? */}
                                <CustomLabel 
                                    label={data.label}
                                    placeholder={data.placeholder}
                                    height={"40px"}
                                    text={data.type}
                                    value={this.state.formFields[index].value}
                                    onChange={(e) =>this.onChangeTextBox(e,index)}
                                   />
                               </CellWrapper>
                            )
                          }
                            else{
                              return(
                              <CellWrapper>
                                 <CustomLabel
                                    label={data.label}
                                    options={data.options}
                                    type={data.type}
                                    text={data.type}
                                  />
                             
                             </CellWrapper>
                              )
                          
                            }
                          })
                        }  
                      </LeftWrapper>
                      <RightWrapper>
                      <UpperWrapper>
                            <ImageBox
                              imagePath={this.state.imagePath}
                            />
                            <ImageIcon
                              onClick={this.selectImage}
                            >
                              <input type="file" id="file" ref="fileUploader" style={{display: "none"}} onChange={this.selectedImage}/>
                              <FontAwesomeIcon icon={faBell}/>
                            </ImageIcon>
                        </UpperWrapper>
                      </RightWrapper>
                    </LeftRightWrapper>
                  </SubWrapperInsideBody>
              </SubWrapperBody>
          </SubWrapper>
      </MainWrapper>
    )
  }
}
  
const mapStateToProps = state => {
  
  return {
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)