import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YahooSearchServiceComponent from './components/YahooSearchServiceComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YahooSearchServiceComponent/>
    </>
  )
}

export default App
