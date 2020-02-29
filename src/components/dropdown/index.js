import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'


const DropDownComp = styled(Dropdown)``

const DropdownComp = (props) => (
    <DropDownComp fluid text={props.text} style={{ color : "#FFFFFF"}}>
        <DropDownComp.Menu>
            {
                props.dropdownValue.map((data) => {
                    return(
                        <DropDownComp.Item text={data.value} />
                    )
                })
            }
        </DropDownComp.Menu>
    </DropDownComp>
  )
  
  export default DropdownComp