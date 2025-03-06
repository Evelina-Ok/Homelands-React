import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { EstateDetailsPage } from './pages/EstateDetailsPage'
import { EstatesPage } from './pages/EstatesPage'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path="/estates" element={<EstatesPage />} />
            <Route path="/details/:id" element={<EstateDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
