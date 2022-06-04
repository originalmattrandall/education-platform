import { FormEventHandler } from 'react';
import { SubmitHandler } from 'react-hook-form';
import './App.css';
import { LoginForm, LoginFormElements } from './presentation/components/loginform/LoginForm';
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

const onSubmit: SubmitHandler<LoginFormElements> = (event) => {

  console.log(event.nameInput)
  console.log(event.passwordInput)
}
