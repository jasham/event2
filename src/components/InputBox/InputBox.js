import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'


const InputComp = styled(Input)`
    width : 100%;
    height : ${props => props.height ? props.height : "50px" };
    font-family :   ${
                        props => props.ffamily === "regular" ? 'SourceSansPro-Regular'  :
                           props.ffamily === "black" ? 'SourceSansPro-Black' :
                                props.ffamily === "bold" ? 'SourceSansPro-Bold' : 
                                        props.ffamily === "extralight" ? 'SourceSansPro-ExtraLight':
                                            props.ffamily === "light" ? 'SourceSansPro-Light' : 
                                                    props.ffamily === "semibold" ? 'SourceSansPro-SemiBold' : 'SourceSansPro-Regular'
                    } !important; 
    font-size  :    ${props => props.fontSize === "tiny" ? "10px" : 
                                props.fontSize === "small" ? "12px" : 
                                    props.fontSize === "normal" ? "15px" : 
                                        props.fontSize === "medium" ? "20px" : 
                                            props.fontSize === "big" ? "25px" : 
                                                props.fontSize === "biggest" ? "30px" : props.fontSize 
                    } !important;
`

const CustomInput = (props) => (
    <InputComp 
        icon={props.icon ? props.icon : ''} 
        iconPosition={props.iconPosition ? props.iconPosition : ''} 
        placeholder={props.placeholder}
        ffamily={props.ffamily}
        fontSize={props.fontSize} 
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        height={props.height}
    />
)

export default CustomInput