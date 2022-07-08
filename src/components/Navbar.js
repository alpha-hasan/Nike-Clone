import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand"><svg className="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`fw-bold nav-link ${location.pathname === '/' ? 'active' : ""}`} aria-current="page" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`fw-bold nav-link ${location.pathname === '/launch' ? 'active' : ""}`} to={'/launch'}>Launch</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />
            <Link to={''} className="link-secondary mt-1" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}
