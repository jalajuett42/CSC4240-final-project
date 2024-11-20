import { useState } from 'react'
import CarouselDemo from './components/CarouselDemo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [inputValue, setInputValue] = useState('')


  return (
    <div className='flex flex-grow flex-col p-6 transition-margin duration-300 bg-blue-400 bg-gradient-to-tr from-slate-800 '>
      <div className='flex items-center justify-between mb-4 mt-9'>
        <h2 className='font-bold font-sans text-blue-100 text-4xl ml-5 pr-8'>
          Clear Compose
        </h2>
      </div>
      <div className='flex flex-col justify-around space-y-8 mt-11'>
        <div
          id='lookup-pill'
          className={`pill-container`}>
          <div className='flex-grow '>
            <div className='flex flex-row justify-between'>
              <label id='email-input' className={`pill-title text-white`}>Paste your email here!</label>
              <button

                onClick={() => { setEmail(inputValue) }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 stroke-white">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
            <input
              id='email-input '
              type='text'
              value={inputValue}
              placeholder='input placeholder'
              className='flex-column text-align-top align-text-top text-wrap  rounded-2xl w-full h-48'>
            </input>
          </div>

        </div>
      </div>
      <div className='flex flex-col justify-around space-y-8 mt-11'>
        <div
          id='lookup-pill'
          className={`pill-container`}>
          <div className='flex-grow'>
            <div className='flex flex-row justify-between'>
              <label id='email-input' className={`pill-title text-white`}>Input Label</label>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 stroke-white">
                <path fillRule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z" clipRule="evenodd" />
                <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
                <path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
              </svg>
            </div>

            <input
              id='email-input '
              type='text'
              placeholder='input placeholder'
              className={`flex-column text-align-top align-text-top text-wrap  rounded-2xl w-full h-48 border-blue-50 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
            </input>
          </div>

        </div>
      </div>
      <CarouselDemo />
    </div>
  )
}

export default App
