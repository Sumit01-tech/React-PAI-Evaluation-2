import { Provider } from 'react-redux'
import './App.css'
import { Route, Router } from 'react-router-dom'
import BookmarksPage from './pages/BookmarksPage'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path='/' element={<HomePage />} />
          <Route path='/bookmarks' element={<BookmarksPage />} />
          <Route path='/premises/:id' element={<PremisesDetails />} />
        </Router>
      </Provider>
    </>
  )
}

export default App
