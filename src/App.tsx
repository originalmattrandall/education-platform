import Dinero from 'dinero.js';
import { FormEventHandler } from 'react';
import './App.css';
import { LoginForm } from './presentation/components/loginform/LoginForm';
import { VerticalNavBar } from './presentation/components/verticalnavbar/VerticalNavBar';

function App() {
  return (
    <div className="App">
      <VerticalNavBar />

      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

const onSubmit: FormEventHandler = (event) => {
  event.preventDefault()

  console.log("form submitted")
}
