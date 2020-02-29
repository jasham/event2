import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaComponent = (props) => (
  <div
    style={{
      width : "100%",
      height : props.height,
      maxHeight : props.maxHeight,
    }}
  >

  <Form
    
  >
    <TextArea 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{
          height : props.height,
          maxHeight : props.maxHeight,
          width : "100%",
          maxWidth : "100%"
        }}
    />
  </Form>
  </div>
  
)

export default TextAreaComponent