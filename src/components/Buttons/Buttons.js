import React from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'


const CustomButton = styled(Button)`
    /* background-color : ${props => props.backgroundcolor ? props.backgroundcolor : "default" } !important; */
    /* border-radius : 40px !important; */
    width : ${props => props.width};
    /* height : ${props => props.height}; */
    height : 40px;
    /* box-shadow : 0px 0px 5px 2px rgba(0,0,0,0.1) !important; */

    :hover{
        /* box-shadow : 0px 0px 10px 2px rgba(0,0,0,0.1) !important; */
        /* background-color : ${props => props.hoverbgcolor ? props.hoverbgcolor : "default" } !important; */
    }
`

const Buttons = (props) => {
    return(
        <CustomButton
            backgroundcolor={props.backgroundcolor}
            size={props.size}
            width={props.width}
            height={props.height}
            hoverbgcolor={props.hoverbgcolor}
            onClick={props.onClick}
        >
            {props.children}
        </CustomButton>
    )
}

export default Buttons
