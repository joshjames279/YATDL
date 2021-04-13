import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';
import ToDoDomain from './components/ToDoDomain/ToDoDomain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <p>
          <ToDoDomain/>
        </p>
      </header>
    </div>
  );
}

export default App;
