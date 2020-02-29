import React, { Component } from 'react'
import styled from 'styled-components'
import { properties, fSize, fWeight } from '../../conf/properties'
import TextBox from '../../components/TextBox/TextBox'
import { AlignCenter } from 'react-feather'

const MainWrapper = styled.div`
  /* height : 62px; */
  background-color : ${properties.white};
  border-top : 1px solid rgba(0, 40, 100, 0.12);
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  padding : 25px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const SubWrapper = styled.div`
  width: 93%;
  height: inherit;
  background-color : ${properties.white};
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 0px 40px;
  padding: 0px 12px;
`
const SubWrapper1 = styled.div`
  width: 94%;
  height: inherit;
  background-color : ${properties.white};
  display: flex;
  flex-direction: row;
  margin: 0px 40px;
  padding: 0px 12px;
`
class Footer extends Component {
  render() {
    return (
      <MainWrapper>
        <SubWrapper>
          <TextBox
            color={properties.lightGrey}
            fontSize={fSize.sMedium}
          >
            Mediterranean Shipping Summit 2019
         </TextBox>
        </SubWrapper>
      </MainWrapper>
    )
  }
}


export default Footer
