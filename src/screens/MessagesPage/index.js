import React, {
  Component
} from 'react'

import { connect } from 'react-redux'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight, ffamily } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import turkeyistanbul from '../../assets/images/turkeyistanbul.png'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { getUserList } from '../../redux/actions/messages'
import WebSocketInstance from '../../conf/websocket'

const MainWrapper = styled.div`
  padding : 24px 14px;
  display: flex;
  justify-content: center;
  /* min-height: 100vh;
  max-height: 130vh; */
  height : 400px;
  background-color: ${properties.bgGray};
`
const SW1 = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  border : 1px solid rgba(0, 40, 100, 0.12);
  background-color: white;
  /* min-height: 98%; */
`


const HeaderBox = styled.div`
  width: 30%;
`
const MessageHeader = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  flex-direction: row;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
`
const RecentMessageHeader = styled.div`
  width: 40%;
  display: flex;
  align-items:center;
  padding-left: 20px;
`
const SearchMessageHeader = styled.div`
  width: 60%;
  display: flex;
  align-items:center;
`
const MessageListA = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.active ? properties.messageBG : properties.white };
  height: 77px;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  cursor: pointer;

`
const MessageList = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${properties.white};
  height: 77px;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
  cursor: pointer;
`
const MessagePhoto = styled.div`
  width: 26.52px;
  height: 26.52px;
  background-image : url(${props => props.turkeyistanbul});
  background-size: cover;
  margin: 18px 0px 16px 10px;
  cursor: pointer;
`
const MessageSummary = styled.div`
  width: 100%;
  margin: 18px 10px 16px 10px;
`
const ND = styled.div`
  display: flex;
  flex-direction: row;
`
const Name = styled.div`
  width: 80%;
`
const Date = styled.div`
  width: 20%;
`
const MSummary = styled.div`
  width: 100%;
`

const MessageBox = styled.div`
  width: 70%;
  height: 100%;
  border-left : 1px solid rgba(0, 40, 100, 0.12);
  
`
const MessageBoxW = styled.div`
  padding: 15px 25px 15px 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height : 323px;
  overflow-y : scroll;
  overflow-x : hidden;
`

const RMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`
const RBundle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const RPhoto = styled.div`
  min-width: 36.81px !important;
  height: 36.81px;
  background-image : url(${props => props.turkeyistanbul});
  background-size: cover;
  cursor: pointer;
  
`
const RMessageW = styled.div`
  
`

const RTextBox = styled.div`
  background-color: ${properties.rMessage};
  border : 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 0px 25px 25px 25px;
  height: auto;
  width: 80%;
  padding: 10px;
  margin-left: 10px;
`
const RDate = styled.div`
  color: ${properties.messagesBlackInside};
  font-size: ${fSize.sMedium};    
  margin-left: 10px;
  padding-top: 5px;         
`



const InputBox = styled.input`
  border : 0px;
  outline-offset : 0px;
  border-bottom : 1px solid rgba(0,0,0,0.2);
  margin-right: 20px;
  height: 20px;
  font-size: 15px;
  width: 90%;
  :focus{
    outline : 0px !important;
  }
`
const SMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`
const SBundle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 24px 48px;
`
const SMessageW = styled.div`
  
`
const STextBox = styled.div`
  float: right;
  
  background-color: ${properties.rMessage};
  border : 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 25px 25px 25px 0px;
  height: auto;
  width: 80%;
  padding: 10px;
  margin-left: 10px;
`
const SDate = styled.div`
  color: ${properties.messagesBlackInside};
  font-size: ${fSize.sMedium};    
  margin-left: 10px;
  padding-top: 5px;        
  float: right; 
`
const SendInputBox = styled.input`
 
  border : 0px;
  outline-offset : 0px;
  border-top : 1px solid rgba(0,0,0,0.2);
  margin-right: 20px;
  height: 40px;
  font-size: 15px;
  width: 86%;
  margin-left: 25px;
  
  :focus{
    outline : 0px !important;
    
  }
`
const SendIcon = styled.div`
  
  border-radius: 50%;
  background-color: blue;
  
  background-size: cover;
  cursor: pointer;
  
`

const UserList = styled.div`
  height: 349px;
  overflow-y : scroll;
`

class Messages extends Component {
  componentDidMount(){
    // this.props.getUserList()
    // this.waitForSocketConnection()
    // this.initialiseChat()
  }

  initialiseChat() {
    // this.waitForSocketConnection(() => {
    //   WebSocketInstance.fetchMessages(
    //     this.props.username,
    //     this.props.match.params.chatID
    //   );
    // });
    // WebSocketInstance.connect(this.props.match.params.chatID);
    WebSocketInstance.connect(1);
  }

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function() {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is made");
        callback();
        return;
      } else {
        console.log("wait for connection...");
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  messageChangeHandler = event => {
    this.setState({ message: event.target.value });
  };

  sendMessageHandler = e => {
    e.preventDefault();
    const messageObject = {
      from: this.props.username,
      content: this.state.message,
      chatId: this.props.match.params.chatID
    };
    WebSocketInstance.newChatMessage(messageObject);
    this.setState({ message: "" });
  };

  renderTimestamp = timestamp => {
    let prefix = "";
    const timeDiff = Math.round(
      (new Date().getTime() - new Date(timestamp).getTime()) / 60000
    );
    if (timeDiff < 1) {
      // less than one minute ago
      prefix = "just now...";
    } else if (timeDiff < 60 && timeDiff > 1) {
      // less than sixty minutes ago
      prefix = `${timeDiff} minutes ago`;
    } else if (timeDiff < 24 * 60 && timeDiff > 60) {
      // less than 24 hours ago
      prefix = `${Math.round(timeDiff / 60)} hours ago`;
    } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
      // less than 7 days ago
      prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
    } else {
      prefix = `${new Date(timestamp)}`;
    }
    return prefix;
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.chatID !== newProps.match.params.chatID) {
      WebSocketInstance.disconnect();
      this.waitForSocketConnection(() => {
        WebSocketInstance.fetchMessages(
          this.props.username,
          newProps.match.params.chatID
        );
      });
      WebSocketInstance.connect(newProps.match.params.chatID);
    }
  }
  state = {
    currentMessageRow : '',
    message: ""
  }

  onClickMessage = (index) => {
    this.setState({ currentMessageRow : index })
  }

  render() {
    return (
     
      <MainWrapper >
        <SW1>
          <HeaderBox>
            <MessageHeader>
              <RecentMessageHeader>
                <TextBox
                  ffamily={"Bold"}
                  color={properties.messagesBlue}
                  fontSize={fSize.lMedium}>
                  Recent
                </TextBox>
              </RecentMessageHeader>
              <SearchMessageHeader>
                <InputBox placeholder="Search" />
              </SearchMessageHeader>
            </MessageHeader>
            <UserList>
              {
                Object.keys(this.props.userList).length > 0 ?
                  Object.values(this.props.userList).map((data,index) =>{
                    return(
                      <MessageListA 
                        onClick={() => this.onClickMessage(index)}
                        active={this.state.currentMessageRow === index ? true : false}
                      >
                        <MessagePhoto turkeyistanbul={turkeyistanbul} />
                        <MessageSummary>
                          <ND>
                            <Name>
                              <TextBox
                                ffamily={"Bold"}
                                color={properties.messagesBlack}
                                fontSize={fSize.medium}>
                                {data.user.username}
                              </TextBox>
                            </Name>
                            <Date>
                              <TextBox
                                ffamily={"Bold"}
                                color={properties.messagesBlack}
                                fontSize={fSize.mSmall}>
                                {/* Date */}
                              </TextBox>
                            </Date>
                          </ND>
                          <MSummary>
                            <TextBox
                              ffamily={"Bold"}
                              color={properties.messagesBlackLight}
                              fontSize={fSize.small}>
                              {/* Small Message */}
                              </TextBox>
                          </MSummary>
                        </MessageSummary>
                      </MessageListA>
                    )
                  })
                  :
                  null
              }
            </UserList>
          </HeaderBox>
          <MessageBox>
            <MessageBoxW>
              <RMessage>
                <RBundle>
                  <RPhoto turkeyistanbul={turkeyistanbul} />
                  <RMessageW>
                    <RTextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </RTextBox>
                    <RDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </RDate>
                  </RMessageW>
                </RBundle>
              </RMessage>
              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        Apollo University, Delhi, India Test
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>

              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>
              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>
              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>
              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>
              <SMessage>
                <SBundle>
                  <SMessageW>
                    <STextBox>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackInside}
                        fontSize={fSize.sMedium}>
                        We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.
                      </TextBox>
                    </STextBox>
                    <SDate>
                      <TextBox
                        ffamily={"regular"}
                        color={properties.messagesBlackTime}
                        fontSize={fSize.small}>
                        11:01 AM | June 9
                      </TextBox>
                    </SDate>
                  </SMessageW>
                </SBundle>
              </SMessage>
            </MessageBoxW>
            <SendInputBox placeholder="Type a message" />
            <FontAwesomeIcon icon={faPaperPlane} style={{
              backgroundColor: "#05728f",
              size: 10,
              color: "white",
              borderRadius: "50%",
              position: "relative",
              overflow: "visible",
              float: "right",
              padding: 9,
              left: -10,
              cursor: "pointer",
            }} />



          </MessageBox>
        </SW1>
      </MainWrapper>
    )
  }
}

const mapStateToProps = state => {
  console.log("I am geeting userList",state.userList)
  return {
      userList : state.userList
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getUserList : () => dispatch(getUserList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)