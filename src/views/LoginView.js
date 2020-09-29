// import React, { useState, useCallback } from 'react';
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from '../components/form/Form.module.css';

// // const mapDispatchToProps = {
// //   onLogin: authOperations.logIn,
// // };

// export default function LoginView() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const onLogin = useCallback(() => dispatch(authOperations.logIn()), [
//     dispatch,
//   ]);

//   const handleSubmit = e => {
//     e.preventDefault();

//     // console.log(email, password);

//     onLogin({ email, password });
//     setEmail('');
//     setPassword('');

//     // this.props.onLogin(this.state);
//     // this.setState({ email: '', password: '' });
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         console.warn(`Тип поля name - ${name} не обрабатывается`);
//     }
//   };

//   return (
//     <div id="content">
//       <h1 id="title">LogIn page</h1>

//       <form
//         onSubmit={handleSubmit}
//         className={styles.phonebook__form}
//         autoComplete="off"
//       >
//         <label className={styles.phonebook__label}>
//           e-mail
//           <input
//             className={styles.phonebook__input}
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label className={styles.phonebook__label}>
//           Password
//           <input
//             className={styles.phonebook__input}
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit" className={styles.btn}>
//           LogIn
//         </button>
//       </form>
//     </div>
//   );
// }

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div id="content">
        <h1 id="title">LogIn page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.phonebook__form}
          autoComplete="off"
        >
          <label className={styles.phonebook__label}>
            e-mail
            <input
              className={styles.phonebook__input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.phonebook__label}>
            Password
            <input
              className={styles.phonebook__input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={styles.btn}>
            LogIn
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
