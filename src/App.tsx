import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Locations from './pages/Locations';
import Categories from './pages/Categories';
import Forms from './pages/Forms';
import Submissions from './pages/Submissions';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                    <Sidebar />
                    <main className="flex-1 ml-64">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/properties" element={<Properties />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/forms" element={<Forms />} />
                        <Route path="/submissions" element={<Submissions />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </main>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;