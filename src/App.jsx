import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { EstateDetailsPage } from './pages/EstateDetailsPage'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            {/* <Route path="/boliger" element={<HousingPage />} /> */}
            <Route path="/details/:id" element={<EstateDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
