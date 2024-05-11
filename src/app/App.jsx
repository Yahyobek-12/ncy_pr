import { Home, Navbar } from "../index"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
