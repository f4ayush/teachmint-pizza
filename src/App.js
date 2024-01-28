import './App.css';
import PizzaForm from './components/PizzaForm';
import Home from './components/Home';
import PizzaTable from './components/PizzaTable';

function App() {
  return (
    <div className="App">
      <div>
        <PizzaForm />
        <Home />
        <PizzaTable/>
      </div>
    </div>
  );
}

export default App;
