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
import CustomTable from '../../components/CustomTable/CustomTable'
import { X } from "react-feather"
import { Lock } from "react-feather"
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {getMessageInvitation} from '../../redux/actions/getMessageInvitation/getMessageInvitation'
import {getMessageRequest} from '../../redux/actions/getMessageRequest/getMessageRequest'
import Buttons from '../../components/Buttons/Buttons'

const MainWrapper = styled.div`
  padding : 24px 48px;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${properties.bgGray};
  flex-direction : column;
`
const SW1 = styled.div`
  /* height: 80px; */
  width: 95%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border : 1px solid rgba(0, 40, 100, 0.12);
  // background-color: white;
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
  width: 100%;
  height: 30px;
  padding: 8px 8px 8px 24px;
`

class Attendees extends Component {
  componentDidMount(){
    this.props.getMessageInvitation()
    this.props.getMessageRequest()
  }
  state={
    tableHeader : [
                { value : "Date", width : "31%", maxWidth : "20px"},
                {value : "Name", width : "31%",  maxWidth : "20px"},
                {value : "Company", width : "31%",  maxWidth : "20px"},
                { value : "", width : "7%", maxWidth : "20px"}
               
            ],
    tableData:[
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""}
    ],
    tableHeaderInvitation : [
      { value : "Date", width : "31%", maxWidth : "20px"},
      {value : "Name", width : "31%",  maxWidth : "20px"},
      {value : "Company", width : "31%",  maxWidth : "20px"},
      { value : "", width : "7%", maxWidth : "20px"}
     
  ],
  tableDataInvitation:[
    {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""},
      {"date":"123","name":"jasham","Company":"covalense","action":""}
  ],
  active:true,
  meetingRequestStatus : false

}

showTable=()=>{
  let {panes}=this.state
  return(
    panes=[
        {

          menuItem: 'Meeting request',
          render: () => 
          <Tab.Pane 
          attached={false}
          style={{height:"300px"}}
          > 
          
          <CustomTable
            tableHeader={this.state.tableHeader}
            tableData={this.state.tableData}
        />
        </Tab.Pane>,
        },
        {
          menuItem: 'Meeting Invitations',
          render: () => 
          <Tab.Pane 
          attached={false}
          style={{height:"300px"}}> 
          
          <CustomTable
          tableHeader={this.state.tableHeaderInvitation}
          tableData={this.state.tableDataInvitation}
          active={this.state.active}
        />

        </Tab.Pane>,
        }
      ]
      
    )
}

showModal = () => {
  return(
    <div
      style={{
        position : "absolute",
        top :0 ,
        left : 0,
        width : "100%",
        height : "100%",
        backgroundColor : "rgba(0,0,0,0.3)",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
      }}
    >
        <div
          style={{
            width : "60%",
            height : "60%",
            backgroundColor : "white",
            boxShadow : "0px 0px 5px 2px rgba(0,0,0,0.3)",
            borderRadius : 3
          }}
        >

        </div>
    </div>
  )
}

requestMeeting = () => {
  this.setState({ meetingRequestStatus : true })
}
  render() {
    return (
      <MainWrapper >
        
        <SW1>
        <div
          style={{
            height : 40,
            width : "100%",
            // backgroundColor : "red",
            justifyContent : "flex-end",
            display : "flex",
            position : "relative",
            top : "41px"
          }}
        >
          <Buttons
            height={20}
            onClick={this.requestMeeting}
          >
            Invite
          </Buttons>
        </div>
         {/* <HeaderColumn>
            <TextBox
              color={properties.littleLightGrey}
              fontSize={fSize.slarge}>
              My Meetings
            </TextBox>
           </HeaderColumn>  */}
           <Tab
              style={{
                // display:"flex",
                width:"100%",
                height:"90%"
              }}
               menu={{  borderless: true, attached: true, tabular: false}}
              panes={this.showTable()}
            />
          </SW1>
          {this.state.meetingRequestStatus ? this.showModal() : null }
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
    getMessageInvitation:()=>dispatch(getMessageInvitation()),
    getMessageRequest:()=>dispatch(getMessageRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attendees)