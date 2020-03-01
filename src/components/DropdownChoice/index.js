import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { properties } from '../../conf/properties'


const DropdownExampleSearchSelectionTwo = (props) => {
    switch(props.type){
      case 'file' : 
        return(
          <Dropdown text='File'>
            <Dropdown.Menu>
              {
                props.menuItems.map((data) => {
                  return(
                    <Dropdown.Item text={data.text} />
                  )
                })
              }
            </Dropdown.Menu>
          </Dropdown>
        )
      case 'dropdown':
        return(
          <Dropdown
            placeholder={props.placeolder}
            fluid
            selection
            options={props.options}
          />
        )
    }
}

export default DropdownExampleSearchSelectionTwo