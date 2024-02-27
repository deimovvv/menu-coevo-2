import AppRoutes from './Routes/AppRoutes'
import Header from './components/Header/Header'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
          <AppRoutes />
      </Router>

    </>
  )
}

export default App