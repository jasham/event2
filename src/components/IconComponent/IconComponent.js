
import React from 'react'
import styled from 'styled-components'

const IconComp = styled.i`
    font-size: 13px;
    `
export const IconComponent = (props) => {
   let icons = ["lock icon","x icon","check icon"]
    return(
        <IconComp 
            className={
                props.icon === "lock" ? icons[0] : 
                props.icon === "x"? icons[1]:
                props.icon === "check"? icons[2]:
                ''
            }
                 onClick={props.onChangeData}
                fontSize={props.fontSize}
                style={props.style}
         />
    )
}