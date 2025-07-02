import logo from './logo.svg';
import './App.css';



// function App() {
//   const firstName = 'Hinesh';
//   const lastName = 'Dhameliya';
//   const Age = 20;
//   const job = 'Web';

//   const myarray = [1, 2, 3, 4, 5];
//   return (
//     <div className="App">
//       <h3>Full Name:{firstName} {lastName}</h3>
//       <p>Age:{Age}</p>
//       <p>Job:{job}</p>
//       <input placeholder='Enter your name'></input>

//       {myarray[0]}

//       {
//         myarray[0] >= 1 ? "True" : "False"
//       }
//     </div>
//   );
// }

function App() {
  const style = {
    margin: '16px',
    padding: '16px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    boxShadow: '0  2px 5px #ccc',
  }
  return (
    <div className="App">
      <div style={style}>
        <h3>blog title 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

      <div style={style}>
        <h3>blog title 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

      <div style={style}>
        <h3>blog title 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

    </div>

  );
}

export default App;
