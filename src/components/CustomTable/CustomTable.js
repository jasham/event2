import React, { Component } from 'react';
import styled from 'styled-components'

import CustomText from '../TextBox/TextBox'
import {IconComponent} from '../IconComponent/IconComponent'



const MainWrapper = styled.div`
    width : 98%;
    height : auto;
    display : flex;
    flex-direction : column;
    justify-content : center;
`

const TableConatiner = styled.div`
    // border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    height: 50px;
    padding: 8px 8px 8px 24px;

`
const TableHeader = styled.div`
    width : 100%;
    height :  30px;
    display : flex;
    flex-direction : row;
    // align-items : center;
    justify-content : space-between;
   
    
`
const RowTr=styled.div`
    width : 100%;
    height :  30px;
    display : flex;
    flex-direction : row;
    // align-items : center;
    justify-content : space-between;
    :nth-child(even) {
        background-color: white;
    };
    :nth-child(odd) {
        background-color: #F3F4F5;
    };
    
`

const Cell = styled.div`
    // height : 45px;
    ${props => props.width ? `width : ${props.width}` : null};
    display : flex;
    align-items : center;
    min-width: ${props => props.minWidth ? props.minWidth : "20px"};
    border-bottom: 1px solid rgba(0,0,0,0.1)
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
                                 style={{
                                    display:"flex",
                                    alignItmes:"center",
                                    marginLeft: "29px"
                                }}
                                
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
                                        <RowTr>
                                            {
                                                Object.values(data).map((data2,i)=>{
                                                    console.log(data,"data290")
                                                    return(
                                                        <Cell
                                                            style={{
                                                                width : this.props.tableHeader[i].width,
                                                                height : "100%",
                                                                textOverflow: "ellipsis",
                                                               
                                                                }}
                                                            minWidth={this.props.tableHeader[i].minWidth}
                                                            >
                                                            {
                                                                i===3?
                                                                this.props.active?
                                                                <div>
                                                                    <IconComponent
                                                                        icon={"check"}
                                                                        style={{
                                                                            color:"#9aa0ac",
                                                                            marginRight:28
                                                                            
                                                                        }}
                                                                      
                                                                    /> 
                                                                    <IconComponent
                                                                        icon={"x"}
                                                                        style={{
                                                                            color:"#9aa0ac"
                                                                        }}
                                                                        />
                                                                   
                                                                    </div>
                                                                    :
                                                                    <div>
                                                                    <IconComponent
                                                                        icon={"x"}
                                                                        style={{
                                                                            color:"#9aa0ac",
                                                                            marginRight:28
                                                                            
                                                                        }}
                                                                      
                                                                    /> 
                                                                    {/* <IconComponent
                                                                        icon={"lock"}
                                                                        style={{
                                                                            color:"#9aa0ac"
                                                                        }}
                                                                        /> */}
                                                                   
                                                                    </div>

                                                                :
                                                                <CustomText 
                                                                style={{
                                                                    display:"flex",
                                                                    alignItmes:"center",
                                                                    marginLeft: "29px"
                                                                }}
                                                                >
                                                                  {data2}
                                                                 </CustomText>
                                                            }
                                                        </Cell>
                                                    )
                                                        
                                                })
                                            }
                                        </RowTr>
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