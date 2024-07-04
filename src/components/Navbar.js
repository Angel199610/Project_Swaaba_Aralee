import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create and use a CSS file for styling
import logo from '../assets/logo2.png'; // Update the path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">SWAABA ARALEE</h1>
        <br></br>
        <br></br>
        <p>The Best Automative</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
                <li>
          <Link to="/cars">Car Shop</Link>
        </li>
        
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/users">Sign Up</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.js';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/users">Users</Link>
//         </li>
//         <li>
//           <Link to="/cars">Cars</Link>
//         </li>
//         <li>
//           <Link to="/transactions">Transactions</Link>
//         </li>
//         <li>
//           <Link to="/AboutUs">Swaaba-Aralee</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
