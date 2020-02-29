import React, {
  Component
} from 'react'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'

class KitchenSink extends Component {
  render() {
    return (<div>
      <Header />
      <HeaderDown />

      <TextBox color={properties.black} >
        This is normal Text
      </TextBox>
      <TextBox ffamily={"black"} color={properties.blue} >
        This text is from black family
      </TextBox>
      <TextBox ffamily={"blackItalic"} color={properties.footerLightGrey}>
        This text is from blackItalic family
      </TextBox>
      <TextBox ffamily={"Bold"} color={properties.lightGrey}>
        This text is from bold family
      </TextBox>
      <TextBox ffamily={"boldItalic"} color={properties.littleLightGrey}>
        This text is from boldItalic family
      </TextBox>
      <TextBox ffamily={"extraLight"} color={properties.mapLightGrey}>
        This text is from extraLight family
      </TextBox>
      <TextBox ffamily={"extraLightItalic"} color={properties.messagesBlack}>
        This text is from extraLightItalic family
      </TextBox>
      <TextBox ffamily={"italic"} color={properties.messagesBlackInside}>
        This text is from italic family
      </TextBox>
      <TextBox ffamily={"light"} color={properties.messagesBlackLight}>
        This text is from light family
      </TextBox>
      <TextBox ffamily={"lightItalic"} color={properties.messagesBlackTime}>
        This text is from lightItalic family
      </TextBox>
      <TextBox ffamily={"regular"} color={properties.messagesBlue}>
        This text is from regular family
      </TextBox>
      <TextBox ffamily={"semiBold"} color={properties.otherBlue}>
        This text is from semiBold family
      </TextBox>
      <TextBox ffamily={"semiBoldItalic"} color={properties.white} >
        This text is from semiBoldItalic family
      </TextBox>

      <Footer />
      <FooterDown />
    </div >
    )
  }
}

export default KitchenSink