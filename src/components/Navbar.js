import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={props.aboutLink}>{props.about}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href='#'>Disabled</a>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Dark Mode Enabled'}</label>
        </div>

      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string.isRequired
}

//note: here .isrequired won't give any error(if we won't import about props from here) because down 
    //blow we have given default value for about 

//Specifies the default values for props:
Navbar.defaultProps = {
    title : 'Set title here',
    about : 'about what?'
}

// router file exept for git diployment

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="/">{props.title}</Link>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">{props.about}</Link>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Dropdown
//             </Link>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><Link className="dropdown-item" to="/">Action</Link></li>
//               <li><Link className="dropdown-item" to="/">Another action</Link></li>
//               <li><hr className="dropdown-divider"/></li>
//               <li><Link className="dropdown-item" to="/">Something else here</Link></li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link disabled" to='/'>Disabled</Link>
//           </li>
//         </ul>
//         {/* <form className="d-flex">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form> */}
//         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Dark Mode Enabled'}</label>
//         </div>

//       </div>
//     </div>
//   </nav>
//   )
// }

// Navbar.propTypes = {
//     title : PropTypes.string,
//     about : PropTypes.string.isRequired
// }

// //note: here .isrequired won't give any error(if we won't import about props from here) because down 
//     //blow we have given default value for about 

// //Specifies the default values for props:
// Navbar.defaultProps = {
//     title : 'Set title here',
//     about : 'about what?'
// }
