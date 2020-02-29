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
import { X } from "react-feather"
import { Lock } from "react-feather"

const MainWrapper = styled.div`
  padding : 24px 48px;
  display: flex;
  justify-content: center;
  height: 53vh;
  background-color: ${properties.bgGray};
`
const SW1 = styled.div`
  height: 80px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border : 1px solid rgba(0, 40, 100, 0.12);
  background-color: white;
  min-height: 95%;
`
const HeaderColumn = styled.div`
  padding: 15px 24px;
  width: -webkit-fill-available;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  
`
const ListColumn = styled.div`
  width: 85%;
  border-bottom : 1px solid rgba(0,0,0,0.1);
  width: 33%;
  height: 30px;
  padding: 8px 8px 8px 24px;
`

class Attendees extends Component {
  render() {
    return (
      <MainWrapper >
        <SW1>
          <HeaderColumn>
            <TextBox
              color={properties.littleLightGrey}
              fontSize={fSize.slarge}>
              My Meetings
            </TextBox>
          </HeaderColumn>
          <table style={{ backgroundColor: "white", width: "90%", }} >
            <ListColumn>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </ListColumn>
            <ListColumn>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </ListColumn>
          </table>

        </SW1>
      </MainWrapper>
    )
  }
}

export default Attendees