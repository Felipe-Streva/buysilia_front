import React from 'react';
import logo from './assets/logo.PNG'
import Input from './Components/Input/Input.js'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <img src={logo} style={{width: '100px', height: '100px'}} />
      <Input title='Nome' type='text' />
    </div>
  );
}

export default App;
