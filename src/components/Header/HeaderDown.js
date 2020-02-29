import React, { Component } from 'react'
import styled from 'styled-components'
import { properties, fSize, fWeight } from '../../conf/properties'
import TextBox from '../TextBox/TextBox'
import bgimage from '../../assets/images/25.jpg'
import nlogo from '../../assets/images/nlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from "@fortawesome/free-regular-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { Home } from "react-feather"
import { Users } from "react-feather"
import { User } from "react-feather"
import { Mail } from "react-feather"
import { constant } from '../../constants'
import {Icons} from '../Icons'

const MainWrapper = styled.div`
  height : 54px;
  background-color : ${properties.red};
  /* border-bottom : 1px solid rgba(0, 40, 100, 0.12); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 600px) {
  display: none;
  height: auto;
  }
`
const SubWrapper = styled.div`
  width: 90%;
  /* height: inherit; */
  /* background-color : ${properties.otherBlue}; */
  display: flex;
  flex-direction: row;
  align-content: center;
  @media (max-width: 600px) {
  flex-direction: column;
  }
`
const Menu1W = styled.div`
  width: auto;
  /* background-color : ${properties.littleLightGrey}; */
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 0px 12px;
  border: 0;
  border-bottom : 1px solid #FFFFFF;
  @media (max-width: 600px) {
  height: 54px;
  };
  :hover {
    border-bottom : 1px solid rgba(0,0,0,0.3);
  }
`
const IconDiv = styled.div`
  /* font-size: 12px; */
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15px;
  width: 15px;
`
const MenuText = styled.div`
  margin-left: 5px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
// const Router = () => (
//   <BrowserRouter>
//     <div>
//       <Nav>
//         <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
//         <NavLink activeClassName='is-active' to='/about'>About</NavLink>
//       </Nav>

//       <Match pattern='/' exactly component={Home} />
//       <Match pattern='/about' exactly component={About} />
//       <Miss component={NoMatch} />
//     </div>
//   </BrowserRouter>
// )

class HeaderDown extends Component {
  render() {
    return (
      <MainWrapper>
        <SubWrapper>
          {
            constant.headerBar.map((data,index) => {
              console.log("Here is data",data)
              return(
                <Menu1W onClick={() => this.props.onClickMenuItem(data.name,index)}>
                  <IconDiv>
                    <Icons icon={data.icon} />
                  </IconDiv>
                  <MenuText>
                    <TextBox
                      ffamily={"light"}
                      color={properties.lightGrey}
                      fontSize={fSize.medium}
                    >
                      {data.name} 
                    </TextBox>
                  </MenuText>
                </Menu1W>
              )
            })
          }
        </SubWrapper>
      </MainWrapper >
    )
  }
}


export default HeaderDown