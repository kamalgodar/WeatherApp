import './App.css';
import './components/Weather.css';
import Header from './components/Header'
import Weather from './components/Weather'

//1st
// function App() {
//   return <h1>Hello</h1>;
// }

// 2nd return can return only one react component (JSX- Javascript XML to write html in js file)  eg, here div 
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     <p>this is a weather app</p>
//     </div>
//   )
// }


// 2nd
function App() {
  return (
    <div>
      <Header />
      <Weather />
    </div>
  )
}

export default App;
