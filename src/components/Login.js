// import React, { useState } from 'react';
import '../styles/Login.css';
import React, {Component} from 'react';
import md5 from 'md5';


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email',
      password: 'password',
    }
  }

  //form handling before submission
  handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    this.setState({
      [name]: value
    });

    document.getElementById(name).style.fontFamily = "Montserrat black";
  }

  setEmptyValue = (event) => {
    const name = event.target.name
    document.getElementById(name).value = "";

  }

  render() {
    return (
      <div className="login">
        <h4>Welcome!</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={this.state.password}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="SIGN IN"
            className="btn"

          />
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn signup-btn" onClick={this.handleSignUp}>Sign Up</button>
        {/* <a className="link" href="/signup">Sign Up</a> */}
        <p className="swaaba">Swaaba-Aralee Limited</p>
      </div>
    )
  }
}

export default Signin;

// const UserForm = ({ onSubmit }) => {
  
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ firstName, lastName, email, contact, password });
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="First Name"
//               required
//             />
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Last Name"
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//             <input
//               type="text"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Contact"
//               required
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//       <div className="image-container">
//         <img src="" alt="Form" />
//       </div>
//     </div>
//   );
// };

// export default UserForm;
