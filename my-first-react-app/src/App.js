import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';
import InputField from './components/ToDoList/InputField.js'
import SubmitButton from './components/ToDoList/submit.js';
import List from './components/ToDoList/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <p>
          <InputField />
          <SubmitButton />
          <List />
        </p>
      </header>
      <script type="module" src="otherApp.js"></script> 
    </div>
  );
}

export default App;
