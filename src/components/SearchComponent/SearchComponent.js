

import React from 'react'
import { Search} from 'semantic-ui-react'
import styled from 'styled-components'
const CustomSearch = styled(Search)
`
     width : ${props => props.width};
   .ui.input{
        height: ${props => props.height}
    }
      
`


const SearchComponent = (props) => {
 return (
      <CustomSearch
            loading={props.loading}
            onResultSelect={props.onResultSelect}
            onSearchChange={props.onSearchChange}
            results={props.results}
            value={props.value}
            width={props.width}
            height={props.height}
            placeholder={props.placeholder}
           />
     
    )
  
}
export default SearchComponent
