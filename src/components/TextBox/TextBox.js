import React from 'react'
import styled from 'styled-components'

const TextComp = styled.div`
    color       :   ${props => props.color};
    font-size  :    ${props => props.fontSize === "tiny" ? "10px" : 
                                props.fontSize === "small" ? "12px" : 
                                    props.fontSize === "normal" ? "15px" : 
                                        props.fontSize === "medium" ? "20px" : 
                                            props.fontSize === "big" ? "25px" : 
                                                props.fontSize === "biggest" ? "30px" : props.fontSize 
                    } !important;
    bold        :   ${props => props.bold};
    font-family :   ${
                        props => props.ffamily === "regular" ? 'SourceSansPro-Regular'  :
                           props.ffamily === "black" ? 'SourceSansPro-Black' :
                                props.ffamily === "bold" ? 'SourceSansPro-Bold' : 
                                        props.ffamily === "extralight" ? 'SourceSansPro-ExtraLight':
                                            props.ffamily === "light" ? 'SourceSansPro-Light' : 
                                                    props.ffamily === "semibold" ? 'SourceSansPro-SemiBold' : 'SourceSansPro-Regular'
                    } !important; 
    ${props => props.style} ;
`
const CustomText = (props) => {
    return(   
        <TextComp
            color={props.color}
            fontSize={props.fontSize}
            bold={props.bold}
            ffamily={props.ffamily}
            style={props.style}
        >
            {props.children}
        </TextComp>
    )
}

export default CustomText