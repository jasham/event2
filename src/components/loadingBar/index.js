import React from 'react'
import styled from 'styled-components'
import { properties } from '../../conf/properties'
import Loader from "react-loader";


const MainWrapper = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-color : ${properties.transparent};
    display : flex;
    justify-content : center;
    align-items : center;
`

export const LoadingPage = () => {
    return(
        <MainWrapper>
            <Loader
                loaded={false}
                lines={13}
                length={20}
                width={10}
                radius={30}
                corners={1}
                rotate={0}
                direction={1}
                color={properties.themeColor}
                speed={1}
                trail={60}
                shadow={false}
                hwaccel={false}
                className="spinner"
                zIndex={2e9}
                top="50%"
                left="50%"
                scale={1.0}
                loadedClassName="loadedContent"
            />
        </MainWrapper>
    )
}