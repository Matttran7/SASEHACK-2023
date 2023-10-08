import { BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path='/'
              element={<ApplicationPage/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;