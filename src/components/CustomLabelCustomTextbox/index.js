import React, { Component } from 'react'
import styled from 'styled-components'
import  CustomText from '../TextBox/TextBox'
import DropdownComp from '../dropdown'
import CustomInput from '../InputBox/InputBox'
// import {properties} from '../../../conf/properties'
import  TextAreaComponent from '../TextAreaComponent/TextAreaComponent'
import  DropdownExampleSearchSelectionTwo from '../DropdownExampleSearchSelectionTwo/DropdownExampleSearchSelectionTwo'



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
                     <DropdownExampleSearchSelectionTwo
                        options={props.options}
                    />
                                :
                    props.text==="textArea"?
                    <TextAreaComponent
                    value={props.value}
                    onChange={props.onChange}
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
