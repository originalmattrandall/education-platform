import './App.css';
import { LoginForm } from './presentation/components/loginform/LoginForm';
import { VerticalNavBar } from './presentation/components/verticalnavbar/VerticalNavBar';

function App() {
  return (
    <div className="App">
      <VerticalNavBar />

      <LoginForm 
        onSubmit={(event) => {
          console.log('form submitted')
        }}/>
    </div>
  );
}

export default App;
