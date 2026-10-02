import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ForRecruiter from './pages/ForRecruiter'
import ForHiringManager from './pages/ForHiringManager'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import WorkSample from './pages/WorkSample'
import AllWorkSamples from './pages/AllWorkSamples'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for/recruiter" element={<ForRecruiter />} />
          <Route path="/for/hiring-manager" element={<ForHiringManager />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/work-sample/:id" element={<WorkSample />} />
          <Route path="/work-samples" element={<AllWorkSamples />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
