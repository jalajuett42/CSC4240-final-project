import { useState } from 'react'
import { Flowbite, Button, Textarea, Card } from 'flowbite-react'
import backgroundImage from './assets/bgimage.webp'
import './App.css'

function App() {
  const backendURL = 'http://34.224.145.158:5000/analyze'
  const [inputValue, setInputValue] = useState('')
  const [displayContents, setDisplayContents] = useState({
    sentences: [], // Array of sentences
    indexes: [], // Array of indexes for highlighted sentences
    rewordings: [] // Array of rewordings for tooltips
  })
  const [sender, setSender] = useState('Student')
  const [recipient, setRecipient] = useState('Professor')
  const [clickedIndexes, setClickedIndexes] = useState([]) // Track clicked indexes

  const handleAnalysis = async (text) => {
    if (!text) {
      console.error('Error: No text provided')
      return
    }

    const sentences = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/)
    console.log('Split sentences:', sentences)

    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sentences,
          sender,
          recipient
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)

        // Extract and format the results
        const indexes = data.map((item) => item.index)
        const rewordings = data.map((item) => item.rewording)
        const negSentiments = data.map((item) => item.sentiment.neg)

        console.log('Indexes:', indexes)
        console.log('Rewordings:', rewordings)
        console.log('Negative Sentiments:', negSentiments)

        highlightText(indexes, rewordings, negSentiments, sentences)
      } else {
        console.error(`Error: Response not OK (status: ${response.status})`)
      }
    } catch (error) {
      console.error('Fetch Error:', error.message)
    }
  }

  const handleEditorSubmit = (e) => {
    e.preventDefault()
    setClickedIndexes([]) // R
    if (inputValue.trim()) {
      handleAnalysis(inputValue)
    } else {
      console.error('Error: Input is empty')
    }
  }

  const handleSentenceClick = (index) => {
    // If the sentence is already clicked, do nothing
    if (clickedIndexes.includes(index)) return

    // Find the rewording for the clicked sentence
    const rewordIndex = displayContents.indexes.indexOf(index)

    // If the index is valid, perform the replacement
    if (rewordIndex !== -1) {
      const newSentences = [...displayContents.sentences]
      const newIndexes = [...displayContents.indexes]
      const newRewordings = [...displayContents.rewordings]

      // Replace the sentence with its rewording
      newSentences[index] = displayContents.rewordings[rewordIndex]

      // Remove the clicked sentence from highlighted indexes and rewordings
      newIndexes.splice(rewordIndex, 1)
      newRewordings.splice(rewordIndex, 1)

      // Update the clicked indexes state
      setClickedIndexes((prevState) => [...prevState, index])

      // Update the display contents state
      setDisplayContents({
        sentences: newSentences,
        indexes: newIndexes,
        rewordings: newRewordings
      })
    }
  }

  const highlightText = (indexes, rewordings, negSentiments, sentences) => {
    setDisplayContents({ sentences, indexes, rewordings })
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center' // Adjust as needed
      }}>
      <div className='flex flex-grow flex-col p-6 transition-margin duration-300 bg-gradient-to-tr from-slate-800 font-sans'>
        <div className='flex items-center justify-between mb-4 mt-9'>
          <div className='flex-row w-full'>
            <div className='flex flex-col'>
              <h2 className='font-bold font-sans text-blue-100 text-4xl ml-5 pr-8 mb-8'>
                Clear Compose
              </h2>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col w-24 h-screen'></div>
              <div className='flex flex-col flex-grow px-16 h-screen w-full text-white mb-2'>
                <Card className='mb-2 flex-grow w-auto h-auto bg-gray-800'>
                  <div className='bg-gray-800 text-white h-12'>
                    <div className='flex flex-row align-middle text-white placeholder-white'>
                      <div className='justify-text-top pt-2 bg-gray-800'>
                        I am{' '}
                      </div>
                      <select
                        id='sender-dropdown'
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        className='rounded-lg max-w-1 ml-2 mr-2 border focus:outline-none bg-transparent border-white focus:border-blue-500 text-gray-200 shadow-md'>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='student'>
                          a Student
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='professor'>
                          a Professor
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='employee'>
                          an Employee
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='employer'>
                          an Employer
                        </option>
                      </select>
                      <div className='pt-2'>writing to my</div>

                      <select
                        id='recipient-dropdown'
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className='ml-2 mr-2 rounded-lg max-w-1 border focus:outline-none bg-transparent border-white focus:border-blue-500 text-gray-200 shadow-md'>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='student'>
                          Student
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='professor'>
                          Professor
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='employee'>
                          Employee
                        </option>
                        <option
                          className='bg-gray-800 text-gray-200 border-white'
                          value='employer'>
                          Employer
                        </option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    className='mb-2 h-56 bg-transparent text-gray-200'
                    id='editor'
                    placeholder='Write an email...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button className='mb-2' onClick={handleEditorSubmit}>
                    Submit
                  </Button>
                </Card>
                <Card className='mb-2 flex-grow w-auto h-auto bg-gray-800'>
                  <div
                    id='message'
                    className='block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                    style={{ whiteSpace: 'pre-wrap', minHeight: '100px' }}>
                    {displayContents.sentences.map((sentence, index) => (
                      <span
                        key={index}
                        className={`relative ${
                          clickedIndexes.includes(index)
                            ? 'text-green-200 cursor-pointer rounded-sm'
                            : displayContents.indexes.includes(index)
                            ? 'text-red-600 cursor-pointer rounded-sm bg-red-200 bg-opacity-90'
                            : 'text-white'
                        }`}
                        onClick={() => handleSentenceClick(index)}
                        onMouseEnter={(e) => {
                          if (displayContents.indexes.includes(index)) {
                            const tooltip = document.createElement('div')
                            tooltip.textContent =
                              displayContents.rewordings[
                                displayContents.indexes.indexOf(index)
                              ]

                            tooltip.className =
                              'absolute bg-gray-900 text-white rounded p-2 text-sm shadow-lg'
                            tooltip.style.position = 'fixed'
                            tooltip.style.left = `${e.clientX + 10}px`
                            tooltip.style.top = `${e.clientY}px`
                            tooltip.id = `tooltip-${index}`
                            document.body.appendChild(tooltip)
                          }
                        }}
                        onMouseLeave={() => {
                          const tooltip = document.getElementById(
                            `tooltip-${index}`
                          )
                          if (tooltip) {
                            tooltip.remove()
                          }
                        }}>
                        {sentence + ' '}
                      </span>
                    ))}
                  </div>
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
