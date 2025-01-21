import { Routes, Route, Link } from "react-router"

function App() {
  return (
    <div>
      <nav className="flex justify-between h-8 bg-green-200">
        <div className="flex gap-4 items-center">
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<h1>Login Page</h1>} />
        <Route path="register" element={<h1>Register Page</h1>} />

        <Route path="admin">
          <Route path="admin/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="admin/manage" element={<h1>Manage page</h1>} />
          <Route path="admin/setting" element={<h1>Setting page</h1>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App