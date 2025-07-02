import logo from './logo.svg';
import './App.css';



function App() {
  const firstName = 'Hinesh';
  const lastName = 'Dhameliya';
  const Age = 20;
  const job = 'Web';

  const myarray = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <h3>Full Name:{firstName} {lastName}</h3>
      <p>Age:{Age}</p>
      <p>Job:{job}</p>
      <input placeholder='Enter your name'></input>

      {myarray[0]}

      {
        myarray[0] >= 1 ? "True" : "False"
      }
    </div>
  );
}

export default App;
