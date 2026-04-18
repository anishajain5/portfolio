import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ForRecruiter from './pages/ForRecruiter'
import ForHiringManager from './pages/ForHiringManager'
import ForPM from './pages/ForPM'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for/recruiter" element={<ForRecruiter />} />
          <Route path="/for/hiring-manager" element={<ForHiringManager />} />
          <Route path="/for/pm" element={<ForPM />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
