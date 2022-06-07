import { SubmitHandler } from 'react-hook-form';
import './App.css';
import { LoginForm, LoginFormElements } from './presentation/components/loginform/LoginForm';
import { VerticalNavBar } from './presentation/components/verticalnavbar/VerticalNavBar';

function App() {
  return (
    <div className="App primary-background grid-background">

      <LoginForm onSubmit={onSubmitOfForm} header={<h1>heading</h1>} />

    </div>
  );
}

export default App;


const onSubmitOfForm = (event: LoginFormElements) => {
  console.log(event.nameInput)
  console.log(event.passwordInput)
} 