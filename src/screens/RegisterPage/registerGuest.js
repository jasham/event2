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
import DropdownChoice from '../../components/DropdownChoice'
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,  } from "@fortawesome/free-regular-svg-icons"
import CustomText from '../../components/TextBox/TextBox'
import CustomButton from '../../components/Buttons/Buttons'
import { FaCamera } from 'react-icons/fa'
import { Form } from 'semantic-ui-react'
import { registerUser } from '../../redux/actions/register'
import { objectToFormData } from 'object-to-formdata';

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
const SubWrapperBody = styled.form`
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
const CheckBox = styled.input`
  width: 16px;
  height: 16px;
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
  /* background-color : green; */
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

class Register extends Component {

  state = {
    formFields : [
      // { label : "Username", type : "text", value : "",placeholder:"Name"},
      { label : "Name", type : "text", value : "",placeholder:"Name"},
      { label : "Last Name", type : "text", value : "",placeholder:"Last Name"},
      { label : "Position", type : "text", value : "",placeholder:"Position"},
      { label : "Company", type : "text", value : "",placeholder:"Company"},
      { label : "Email Address", type : "text", value : "",placeholder:"Email Address"},
      { label : "Phone Number", type : "text", value : "",placeholder:"Phone Number"},
      { label : "Country", type : "text", value : "",placeholder:"Country"},
      { label : "Select Company Type", type : "dropdown", value : "",key:"",placeholder:"Select Company Type", options : [
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
      ]},
      // { label : "User Type", type : "dropdown", value : "",key:"",placeholder:"Select User", options : [
      //   {
      //     key: 'Panelist',
      //     text: 'Panelist',
      //     value: 'Panelist'
      //   },
      //   {
      //     key: 'Delegate',
      //     text: 'Delegate',
      //     value: 'Delegate'
      //   },
      //   {
      //     key: 'Exhibitor',
      //     text: 'Exhibitor',
      //     value: 'Exhibitor'
      //   },
      //   {
      //     key: 'Speaker',
      //     text: 'Speaker',
      //     value: 'Speaker'
      //   }
      // ]},
      { label : "Password", type : "text", value : "",placeholder:"Password", secure : true},
      { label : "Confirm Password", type : "text", value : "",placeholder:"Confirm Password", secure : true}
    ],
    imagePath : '',
    terms : false,
    currentLabel : ''
  }

  selectImage = () => {
    this.refs.fileUploader.click();
  }

  selectedImage = (e) => {
    var binaryData = [];
    binaryData.push(this.refs.fileUploader.files[0]);
    this.setState({ imagePath : window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"})) })  
  }
  onChangeTextBox=(e,value,index,type)=>{
    let { formFields} = this.state
    if(type==="text"){
      formFields[index].value = e.target.value
      this.setState({ formFields })
    }else{
        let  dataValue  = value.options.find(o => { if(o.value ==value.value) return(o.key)})    
        console.log("I am here",value)  
        formFields[index].value = dataValue.value
        formFields[index].key = dataValue.key
        this.setState({ formFields })
    }
    console.log("Hello Jasham",formFields)
  }

  checkBox = () => {
    this.setState({ terms : !this.state.terms })
  }

  onChangeLabel = (e) => {
    this.setState({ currentLabel : e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let formNew1 = new FormData()
    // let usrData = {
    //   "username": this.state.formFields[0].value,
    //   "first_name": this.state.formFields[1].value,
    //   "last_name": this.state.formFields[2].value,
    //   "password": this.state.formFields[10].value
    // }

    // formNew1.append('username',this.state.formFields[0].value)
    formNew1.append('first_name',this.state.formFields[0].value)
    formNew1.append('last_name',this.state.formFields[1].value)
    formNew1.append('password',this.state.formFields[9].value)
    formNew1.append("position", this.state.formFields[2].value)
    formNew1.append("company",this.state.formFields[3].value)
    formNew1.append("email_address",this.state.formFields[4].value)
    formNew1.append("phone_number",this.state.formFields[5].value)
    formNew1.append("country", this.state.formFields[6].value)
    formNew1.append("company_type",this.state.formFields[7].key)
    formNew1.append("user_type",this.state.formFields[8].key)
    // formNew1.append("agreement_number","123456789")
    formNew1.append("profile_pic",this.refs.fileUploader.files[0])
    formNew1.append("terms","Yes")
    
  //   let tempData = {
  //     "user": {
  //         "username": this.state.formFields[0].value,
  //         "first_name": this.state.formFields[1].value,
  //         "last_name": this.state.formFields[2].value,
  //         "password": this.state.formFields[10].value
  //     },
  //     "position": this.state.formFields[3].value,
  //     "company": this.state.formFields[4].value,
  //     "email_address": this.state.formFields[5].value,
  //     "phone_number": this.state.formFields[6].value,
  //     "country": this.state.formFields[7].value,
  //     "company_type": this.state.formFields[8].key,
  //     "user_type": this.state.formFields[9].key,
  //     "agreement_number": "1234567",
  //     "profile_pic": this.refs.fileUploader.files[0],
  //     "summary": this.state.currentLabel,
  //     "terms": this.state.terms ?  "Yes" : "No"
  // }
//  let formNew = objectToFormData(tempData)
    this.props.registerUser(formNew1)
    // console.log("Hello Jasham ninja 09",formNew1.getAll('user'))
    // console.log("Hello Jasham ninja",formNew)
    // console.log("Hello Jasham ninja",formNew)
    // console.log("Hello Jasham 19999",this.state.terms)
    // console.log("Hello Jasham 13784",this.state.currentLabel)
    // console.log("I am sending files",this.state.imagePath)
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
                          this.state.formFields.map((data,index) => {
                            
                            if(data.type==="text"){
                              return(
                                <CellWrapper>
                                  <CustomLabel 
                                      label={data.label}
                                      placeholder={data.placeholder}
                                      height={"40px"}
                                      text={data.type}
                                      value={data.value}
                                      onChange={(e) =>this.onChangeTextBox(e,'',index,data.type)}
                                      secure={data.secure}
                                     />
                                </CellWrapper>
                              )
                            }else{
                              return(
                                <CellWrapper>
                                  <CustomLabel
                                    label={data.label}
                                    type={data.type}
                                    text={data.type}
                                    options={data.options}
                                    // key={data.options.key} 
                                    value={data.value}
                                    onChange={(e,value) =>this.onChangeTextBox(e,value,index,data.type)}
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
                              {/* <FontAwesomeIcon icon={faBell}/> */}
                              <FaCamera />
                            </ImageIcon>
                        </UpperWrapper>
                          {/* <CellWrapper> */}
                          <CustomLabel 
                              label={"Summary"}
                              placeholder={"Summary"}
                              text={"textArea"}
                              height={"60px"}
                              maxHeight={"60px"}
                              // text={data.type}
                              value={this.state.currentLabel}
                              onChange={this.onChangeLabel}
                              // options={data.options}
                            />
                            <div
                              style={{
                                width : "100%",
                                display : "flex",
                                flexDirection : "row",
                                marginTop : 10,
                              }}
                            >
                              <CheckBox type="checkbox" onClick={this.checkBox}/>
                              <div
                                style={{
                                  marginLeft : 10
                                }}
                              >
                                <CustomText>
                                  Agree the terms and policy
                                </CustomText>
                              </div>
                            </div>
                        {/* </CellWrapper> */}
                            <div
                              style={{
                                display:"flex",
                                justifyContent : "flex-end",
                                width : "100%",
                                marginTop : 30
                              }}
                            >
                              <CustomButton 
                                width={"100px"}
                                onClick={this.onSubmit}
                              >
                                Submit  
                              </CustomButton>
                            </div>
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
    registerUser : (x) => dispatch(registerUser(x))
   }
}

export default connect(null, mapDispatchToProps)(Register)