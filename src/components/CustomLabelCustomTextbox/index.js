import React, { Component } from 'react'
import styled from 'styled-components'
import  CustomText from '../TextBox/TextBox'
import DropdownComp from '../dropdown'
import CustomInput from '../InputBox/InputBox'
// import {properties} from '../../../conf/properties'
import  TextAreaComponent from '../TextAreaComponent/TextAreaComponent'
import  DropdownChoice from '../DropdownChoice'



const MainWrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`
const Conatiner = styled.div`
    margin-top : 4px;
`

const CustomLabelCustomTextbox = (props) => {
    let icons = ['pi pi-ellipsis-h']
    return (
        <MainWrapper>
            <CustomText
                // color={properties.darkwhite}
                fontSize={props.size}
            >
                {props.label}
            </CustomText>
          
            <Conatiner>
                {
                    props.text === "dropdown" ?
                        <DropdownChoice
                            options={props.options}
                            type={"dropdown"}
                            onChange={props.onChange}
                            value={props.value}
                           
                        />
                        
                        :
                        props.text==="textArea"?
                            <TextAreaComponent
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={props.onChange}
                                height ={ props.height}
                                maxHeight ={props.maxHeight}
                                   
                                
                            />
                            :
                            <CustomInput
                                height={props.height}
                                onChange={props.onChange}
                                value={props.value}
                                placeholder={props.placeholder}
                            />
                }
            </Conatiner>
        </MainWrapper>
    )
}

export default CustomLabelCustomTextbox
