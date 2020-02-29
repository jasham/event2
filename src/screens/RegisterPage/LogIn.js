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
import { connect } from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  height: 100vh;
  width: 100%;
  background-color : ${properties.bgGray};
`
const SubWrapper1 = styled.div`
  width: 500px;
  height: auto;
  background-color : ${properties.bgGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
  width: 80%;
}
`
const SubCol1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color : ${properties.bgGray};
`
const SubColLogo = styled.div`
  width: 63px;
  height: 64px;
  background-color : ${properties.bgGray};
  background-image: url(${props => props.favicon});
  background-size: cover;
`
const SubCol2 = styled.div`
  width: 300px;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin: 24px ;
  padding: 0px 24px;
  padding-bottom: 24px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  background-color : ${properties.white}; 
  @media (max-width: 500px) {
  width: 70%;
  margin: 12px ;
  padding: 0px 12px;
  padding-bottom: 12px;
} 
`
const SubCol3 = styled.div`
@media (max-width: 500px) {
  width: 70%;}
`

const Col1 = styled.div`
  padding: 24px 0px;
`
const Col2 = styled.div`
  padding-bottom: 10px;
`
let Input = styled.input`
border: 1px solid rgba(0, 40, 100, 0.12);
height: 38px;
width: 96%;
border-radius: 5px;
color: ${properties.littleLightGrey};
font-size: ${fSize.sMedium};
padding: 0px 0px 0px 10px;
`
const Col3 = styled.div`
height: 38px;
padding-bottom: 24px;
`
let Input2 = styled.input`
border: 1px solid rgba(0, 40, 100, 0.12);
height: 38px;
width: 96%;
border-radius: 5px;
color: ${properties.littleLightGrey};
font-size: ${fSize.sMedium};
padding: 0px 0px 0px 10px;
`
const Col4 = styled.div`
height: 38px;

`
const Col5 = styled.div`
width: 100%;
text-align: right;
padding-top: 5px;
cursor: pointer;
`
const Col6 = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
flex-direction: row;
float: left;
`
const Col7 = styled.div`
width: 100%;
margin-top: 30px;
`
const ButtonSign = styled.button`
width: 100%;
height: 38px;
padding: 6px 12px;
background-color: ${properties.otherBlue};
border-radius: 5px;
cursor: pointer;
`
const CheckBox = styled.input`
width: 16px;
height: 16px;
`
const A = styled.a`
color: ${properties.otherBlue};
`

class LogIn extends Component {
  render() {
    return (<div>
    <MainWrapper >
        <SubWrapper1 >
          <SubCol1>
            <SubColLogo favicon={favicon} />
          </SubCol1>
          <SubCol2>
            <Col1>
              <TextBox
                color={properties.littleLightGrey}
                fontSize={fSize.slarge}>
                Login to your account
              </TextBox>
            </Col1>
            <Col2>
              <TextBox
                ffamily={"semiBold"}
                color={properties.littleLightGrey}
                fontSize={fSize.mSmall}>
                Email address
              </TextBox>
            </Col2>
            <Col3>
              <Input placeholder="Enter Email" />
            </Col3>
            <Col2>
              <TextBox
                ffamily={"semiBold"}
                color={properties.littleLightGrey}
                fontSize={fSize.mSmall}>
                Password
              </TextBox>
            </Col2>
            <Col4>
              <Input2 placeholder="Password" type="password" />
            </Col4>
            <Col5>
              <Link to={"/forgot"}>
              <TextBox
                ffamily={"regular"}
                color={properties.otherBlue}
                fontSize={fSize.lSmall}>
                I forgot password
              </TextBox>
              </Link>
            </Col5>
            <Col6>
              <CheckBox type="checkbox" />
              <TextBox
                ffamily={"regular"}
                color={properties.littleLightGrey}
                fontSize={fSize.medium}>
                Remember me
              </TextBox>
            </Col6>
            <Col7>
              <ButtonSign> <TextBox
                ffamily={"regular"}
                color={properties.white}
                fontSize={fSize.mSmall}>
                Sign in
              </TextBox></ButtonSign>
            </Col7>
          </SubCol2>
          <SubCol3>
            <TextBox
              ffamily={"regular"}
              color={properties.lightGrey}
              fontSize={fSize.medium}>
              Don't have account yet? <Link to={"/register"}> Sign up </Link>
            </TextBox>
          </SubCol3>
        </SubWrapper1>
      </MainWrapper>


    </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)