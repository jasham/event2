import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { properties } from '../../conf/properties'


const DropdownExampleSearchSelectionTwo = (props) => (
  <Dropdown 
         placeholder='State'
            search selection options={props.options}
             />
)

export default DropdownExampleSearchSelectionTwo