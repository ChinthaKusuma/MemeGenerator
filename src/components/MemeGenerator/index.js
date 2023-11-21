import {Component} from 'react'
import {
  MemeGeneratorContainer,
  Heading,
  Input,
  Option,
  Select,
  Button,
  Image,
  BackGroundImage,
  HeadingContainer,
  Para,
} from './styledComponents'
// import  from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageurl1: '',
    imageurl: '',
    button1: false,
    text1: '',
    text2: '',
    text11: '',
    text22: '',
  }

  getImageurl = event => {
    this.setState({
      imageurl: event.target.value,
    })
  }

  getText1 = event => {
    // console.log(event.target.value)
    this.setState({
      text1: event.target.value,
    })
  }

  getText2 = event => {
    // console.log(event.target.value)
    this.setState({
      text2: event.target.value,
    })
  }

  get = event => {
    event.preventDefault()
    const {imageurl, text1, text2, font1, font2} = this.state

    this.setState({
      imageurl1: imageurl,

      text11: text1,

      text22: text2,
      button1: true,
      font2: font1,
    })
  }

  changeFont = event => {
    this.setState({
      font1: event.target.value,
    })
  }

  get2 = () => {
    const {imageurl1, button1, text11, text22, font2} = this.state
    return (
      <>
        {button1 ? (
          <BackGroundImage url={imageurl1} font={font2} data-testid="meme">
            <HeadingContainer>
              <Para color="white">{text11}</Para>
              <Para color="white">{text22}</Para>
              {/* <h1>{text22}</h1> */}
            </HeadingContainer>
          </BackGroundImage>
        ) : null}
      </>
    )
  }

  render() {
    return (
      <MemeGeneratorContainer>
        <form onSubmit={this.get}>
          <Heading>Meme Generator</Heading>
          <label htmlFor="one">Image URL</label>
          <br />
          <Input
            type="text"
            id="one"
            placeholder="Enter the Image Url"
            onChange={this.getImageurl}
          />
          <br />
          <br />
          <label htmlFor="one1">Top Text</label>
          <br />
          <Input
            type="text"
            id="one1"
            placeholder="Enter the text"
            onChange={this.getText1}
          />
          <br />
          <br />
          <label htmlFor="one2">Bottom Text</label>
          <br />
          <Input
            type="text"
            id="one2"
            placeholder="Enter the text"
            onChange={this.getText2}
          />
          <br />
          <br />
          <label htmlFor="one3">Font Size</label>
          <br />
          <Select onChange={this.changeFont} id="one3">
            {fontSizesOptionsList.map(each => (
              <Option value={each.displayText} key={each.optionId}>
                {each.displayText}
              </Option>
            ))}
          </Select>
          <br />
          <br />
          <Button type="submit">Generate</Button>
        </form>
        <div>{this.get2()}</div>
      </MemeGeneratorContainer>
    )
  }
}
export default MemeGenerator
