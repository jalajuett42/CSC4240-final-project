import { useState } from 'react'
import CarouselDemo from './components/CarouselDemo'
import {
  Flowbite,
  Dropdown,
  Button,
  Textarea,
  FloatingLabel,
  Card
} from 'flowbite-react'
import backgroundImage from './assets/bgimage.webp'
import './App.css'

function App() {
  const backendURL = 'http://34.224.145.158:5000/analyze'
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [inputValue, setInputValue] = useState('')
  const [contents, setContents] = useState('')
  const [displayContents, setDisplayContents] = useState('')

  const handleAnalysis = async (text) => {
    if (!text) {
      console.error('Error: No text provided')
      return
    }

    const regex = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/
    const arr = text.split(regex)
    console.log('Split sentences:', arr)

    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sentences: arr,
          sender: 'student',
          recipient: 'professor'
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)
        setDisplayContents(data) // Use this to display analyzed content
      } else {
        console.error(`Error: Response not OK (status: ${response.status})`)
      }
    } catch (error) {
      console.error('Fetch Error:', error.message)
    }
  }

  const handleEditorSubmit = (e) => {
    e.preventDefault() // Prevent default form submission
    if (inputValue.trim()) {
      handleAnalysis(inputValue) // Pass inputValue directly
      setInputValue('') // Clear the input
    } else {
      console.error('Error: Input is empty')
    }
  }
  const handleEditorChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSetContents = () => {
    if (inputValue) {
      setContents(inputValue)
    }
  }

  const clearContents = () => {
    setContents('')
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center' // Adjust as needed
      }}>
      <div className='flex flex-grow flex-col p-6 transition-margin duration-300  bg-gradient-to-tr from-slate-800 font-sans'>
        <div className='flex items-center justify-between mb-4 mt-9'>
          <div className='flex-row w-full'>
            <div className='flex flex-col  '>
              <h2 className='font-bold font-sans text-blue-100 text-4xl ml-5 pr-8 mb-8'>
                Clear Compose
              </h2>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col w-24 h-screen'></div>
              <div className='flex flex-col flex-grow px-16 h-screen w-full text-white mb-2'>
                <Card className='mb-2 flex-grow w-auto h-auto bg-gray-800'>
                  <Card className=' bg-gray-800 text-white h-12 '>
                    <div className='flex flex-row align-middle text-white placeholder-white'>
                      <div className='justify-text-top pt-2 bg-gray-800'>
                        I am{' '}
                      </div>
                      <Dropdown
                        className='bg-gray-800 placeholder-white text-white'
                        label='[option]'
                        color='gray-800'
                        dismissOnClick={false}>
                        <Dropdown.Item>a Student</Dropdown.Item>
                        <Dropdown.Item>a Professor</Dropdown.Item>
                        <Dropdown.Item>an Employee</Dropdown.Item>
                        <Dropdown.Item>an Employer</Dropdown.Item>
                      </Dropdown>
                      <div className='pt-2'>writing to my</div>

                      <Dropdown
                        className='bg-gray-800'
                        label='[option]'
                        text='gray-200'
                        color='gray-800'
                        dismissOnClick={false}>
                        <Dropdown.Item>Student</Dropdown.Item>
                        <Dropdown.Item>Professor</Dropdown.Item>
                        <Dropdown.Item>Employee</Dropdown.Item>
                        <Dropdown.Item>Employer</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </Card>

                  <Textarea
                    className='mb-2 h-56 bg-transparent text-gray-200'
                    id='editor'
                    placeholder='Write an email...'
                    value={inputValue}
                    onChange={(e) => handleEditorChange(e)}
                  />
                  <Button className='mb-2' onClick={handleEditorSubmit}>
                    submit
                  </Button>
                </Card>

                <Card className=' bg-gray-800 h-30'>
                  <Textarea
                    className='mb-2 h-56 caret-transparent cursor-pointer bg-transparent text-gray-200 font-sans'
                    type='read-only'
                    id='editor'
                    placeholder=''
                    value={displayContents}
                  />
                  <Button className='mb-2' onClick={clearContents}>
                    clear contents
                  </Button>
                </Card>
              </div>
              <div className='flex flex-col w-24 h-screen bg-transparent'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
