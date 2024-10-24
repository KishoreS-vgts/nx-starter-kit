import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './app/pages/Error.Page'

const Login = lazy(() => import('./app/pages/Login.page'))
const DashBoard = lazy(() => import('./app/pages/DashBoard.page'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
