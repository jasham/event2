import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
    :hover{
        text-decoration : underline;
    }
`

const LinkButton = (props) => {
    return(
        <StyledLink
        onClick={props.linkData}
        style={props.style}
        >
            {props.children}
        </StyledLink>
    )
}

export default LinkButton