import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ForRecruiter from './pages/ForRecruiter'
import ForHiringManager from './pages/ForHiringManager'
import ForPM from './pages/ForPM'
import CaseStudy from './pages/CaseStudy'
import AllCaseStudies from './pages/AllCaseStudies'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for/recruiter" element={<ForRecruiter />} />
          <Route path="/for/hiring-manager" element={<ForHiringManager />} />
          <Route path="/for/pm" element={<ForPM />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/case-studies" element={<AllCaseStudies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
