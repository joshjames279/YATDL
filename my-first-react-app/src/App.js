import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';
import InputField from './components/ToDoList/InputField.js'
import SubmitButton from './components/ToDoList/submit.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <p>
          <InputField />
          <SubmitButton />
        </p>
      </header>
    </div>
  );
}

export default App;
