import React, { Component } from 'react'
import styled from 'styled-components'
import TextComp from '../TextBox/TextBox'
import SearchComponent from '../SearchComponent/SearchComponent'
import { properties } from '../../../conf/properties'
import CustomButton from '../Buttons/Buttons'


const MainWrapper = styled.div`
    width : 100%;
    height : 30px;
    display : flex;
    flex-direction : row;
`

const LeftWrapper = styled.div`
    height : 100%;
    align-items : center;
    display : flex;
    flex-direction : row;
    flex : 1;
   
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex : 1;
    justify-content : flex-end;
   
`
const Context = styled.div``
const ButtonSearchComponent = (props) => {
    return (
        <MainWrapper>
            <LeftWrapper>
                           <Context
                            style={{
                                marginRight: "6px"
                                 }}>
                                <CustomButton
                                    size="tiny"
                                    width={"61px"}
                                    backgroundcolor={properties.yellow}
                                    hoverbgcolor={properties.darkyellow}
                                    onClick={props.onClick}
                                >
                                   
                                        <TextComp
                                            size="small"
                                            color={properties.white}
                                            bold={true}
                                        >
                                            Add
                                        </TextComp>
                                    
                                    </CustomButton>
                            </Context>
                            <Context>
                                <CustomButton
                                    size="tiny"
                                    width={"61px"}
                                    backgroundcolor={"#F3F4F5"}
                                    hoverbgcolor={"#F3F4F5"}
                                    style={{
                                        "display": "flex",
                                        "justify-content": "center"
                                    }}
                                    onClick={props.onDelete}
                                >
                                    <TextComp
                                        size="small"
                                        color={properties.black}
                                        bold={false}
                                    >
                                        Delete
                                    </TextComp>

                                </CustomButton>
                            </Context>    
            </LeftWrapper>
            <RightWrapper>
                { props.search==="search"?
               <SearchComponent
                    height={"31px"}
                    placeholder={"search..."}
                />
                : null
                }
            </RightWrapper>
        </MainWrapper>
    )
}

export default ButtonSearchComponent;
