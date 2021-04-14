import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';
import ToDoDomain from './components/ToDoDomain/ToDoDomain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToDoList text="Yet Another Todo List!"/>
        <p>
          <ToDoDomain/>
        </p>
      </header>
    </div>
  );
}

export default App;
