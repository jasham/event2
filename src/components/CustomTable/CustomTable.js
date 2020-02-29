import React, { Component } from 'react';
import styled from 'styled-components'

import CustomText from '../TextBox/TextBox'




const MainWrapper = styled.div`
    width : 90%;
    height : auto;
    display : flex;
    flex-direction : column;
    justify-content : center;
`

const TableConatiner = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    height: 40px;
    padding: 8px 8px 8px 24px;

`
const TableHeader = styled.div`
    width : 100%;
    height :  30px;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    
`

const Cell = styled.div`
    // height : 45px;
    ${props => props.width ? `width : ${props.width}` : null};
    display : flex;
    align-items : center;
    min-width: ${props => props.minWidth ? props.minWidth : "20px"};
`

const TableBody = styled.div`
    width : 100%;
    height : 100%;
`
const Footer = styled(TableHeader)``

class CustomDataGrid extends Component {

    state = {
        
    }   

   showTableHeader = () => {
        if(Array.isArray(this.props.tableHeader)){
            if(this.props.tableHeader.length > 0){
             return(
                this.props.tableHeader.map((data, i) => {
                    return (
                        <Cell
                            width={data.width}
                            minWidth={data.minWidth}
                        >
                            <CustomText
                                bold={"bold"}
                                size={"normal"}
                                color={"#9aa0ac"}
                                // color={properties.colors.blueColor}
                            >
                                {
                                    data.value
                                }
                            </CustomText>
                        </Cell>
                    )
                })
                 )
             }
         }
    }
    
   render() {
      return (
            <MainWrapper>
                <TableConatiner>
                    <TableHeader
                        headerHeight={this.props.headerHeight}
                    >
                        { this.showTableHeader() }
                       
                    </TableHeader>
                     {
                            Array.isArray(this.props.tableData)?
                                this.props.tableData.map((data,id)=>{
                                   
                                  
                                    return(
                                        <TableHeader>
                                            {
                                                Object.values(data).map((data2,i)=>{
                                                    console.log("data290",Object.keys(data)[i])
                                                    return(
                                                        <Cell
                                                            style={{
                                                                width : this.props.tableHeader[i].width,
                                                                height : "100%",
                                                                textOverflow: "ellipsis",
                                                               " border-bottom": "1px solid rgba(0,0,0,0.1)"
                                                                }}
                                                            minWidth={this.props.tableHeader[i].minWidth}
                                                        >
                                                            {
                                                                <CustomText >
                                                                  {data2}
                                                                 </CustomText>
                                                            }
                                                        </Cell>
                                                    )
                                                        
                                                })
                                            }
                                        </TableHeader>
                                    )
                                    
                                        
                                })
                            
                                :
                               null
                            
                        }
                        
                </TableConatiner>
               
            </MainWrapper>
        );
    }
}

export default CustomDataGrid;