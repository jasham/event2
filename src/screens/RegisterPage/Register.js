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


const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color : ${properties.bgGray};
`
const SubWrapper1 = styled.div`
  width: 400px;
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
  height: 60%;
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
const InsideCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  
  @media (max-width: 500px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
`
const UserDetail = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: green; */
  @media (max-width: 500px) {
  width: 90%;
  padding-top: 15px;
}
`

const InsideRow = styled.div`
  width: 80%;
  height: 130px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const InsideImage = styled.div`
  width: 93px;
  height: 93px;
  background-image: url(${props => props.guser});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 320px) {
  width: 80px;
  height: 80px;
}
`
const InsideImage1 = styled.div`
  width: 93px;
  height: 93px;
  background-image: url(${props => props.puser});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 320px) {
  width: 80px;
  height: 80px;
}
`

const InsideText = styled.div`
  width: inherit;
  height: auto;
  text-align: center;
`

class Register extends Component {

  onClick=()=>{
    this.props.history.push('/registerGuest')
  }
  onClickPuser=()=>{
    this.props.history.push('/registerUser')
  }
  render() {
  return (<div>
    <MainWrapper >
        <SubWrapper1 >
          <SubCol1>
            <SubColLogo favicon={favicon} />
          </SubCol1>
          <SubCol2>
            <InsideCol>
              <TextBox
                color={properties.littleLightGrey}
                fontSize={fSize.slarge}>
                Sign up
              </TextBox>
            </InsideCol>
            <InsideCol>
              <UserDetail>
                <InsideRow >
                  <InsideImage 
                  guser={guser} 
                  onClick={this.onClick}
                  />
                  <InsideText>
                    <TextBox
                      ffamily={"semiBold"}
                      color={properties.littleLightGrey}
                      fontSize={fSize.mSmall}>
                      Guest User
                    </TextBox>
                  </InsideText>
                </InsideRow>
              </UserDetail>
              <UserDetail>
                <InsideRow >
                  <InsideImage1 
                  puser={puser}
                  onClick={this.onClickPuser}
                   />
                  <InsideText>
                    <TextBox
                      ffamily={"semiBold"}
                      color={properties.littleLightGrey}
                      fontSize={fSize.mSmall}>
                      Paid User
                    </TextBox>
                  </InsideText>
                </InsideRow>
              </UserDetail>

            </InsideCol>
          </SubCol2>
        </SubWrapper1>
      </MainWrapper>


    </div >
    )
  }
}

export default Register