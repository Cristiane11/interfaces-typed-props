import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import PersonComponent from './components/PersonComponent';
import Card from 'react-bootstrap/Card';

function App() {
  const student: Person = {
    name: 'John',
    age: 25,
  }

  
/* added code starts */
  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }

  console.log({profileData});
/* added code stops */

  return (
    <div className="container p-3">
      <h1>{student.name}</h1>
    
    </div>
  );
}

export default App;
