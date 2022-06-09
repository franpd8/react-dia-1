import './App.css';
import Person from './components/Person/Person';

function App() {
const person1 = {
  name: "Harry",
  surname: "Colby",
  age:23 };

const person2 = {
  name: "Luis",
  surname: "Rojas",
  age:28 };

  const person3 ={
    name: "Zeus",
    surname:"Souza",
    age:21}
 return (
  <div className= "App">
  <Person personData={person1}/>
  <Person personData={person2}/>
  <Person personData={person3}/>
  </div>
 )
 }

export default App;
