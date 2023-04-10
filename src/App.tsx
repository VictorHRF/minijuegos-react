import { Routes, Route } from 'react-router-dom'
import { MemoTest } from './screens/MemoTest'
import { WordsPerMinute } from './screens/WordsPerMinute'
import { Pokemon } from './screens/Pokemon'

function App() {

  return (
    <Routes>
      <Route path='/memotest'  element={ <MemoTest/> }/>
      <Route path='/wpm'  element={ <WordsPerMinute/> }/>
      <Route path='/pokemon'  element={ <Pokemon/> }/>
    </Routes>
  )
}

export default App
