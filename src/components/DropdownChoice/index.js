import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { properties } from '../../conf/properties'


const DropdownExampleSearchSelectionTwo = (props) => {
  console.log(props,"props.dropdwon")
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
            onChange={(e,data)=>props.onChange(e,data)}
            value={props.value}
          />
        )
    }
}

export default DropdownExampleSearchSelectionTwo