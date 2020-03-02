import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

const CustomCheckBox = styled(Checkbox)`
    font-size : 100px;
    /* width : 50px; */
    /* .ui.checkbox input.hidden+label {
        width : 21px;
        height : 21px;
    } */
`

const CheckBox = (props) => (
    <CustomCheckBox 
        label={props.label} 
        style={props.style}
    />
)

export default CheckBox