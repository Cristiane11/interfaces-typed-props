import 'bootstrap/dist/css/bootstrap.min.css';
/* added ProfileProps here */
import { Person, ProfileProps } from './models/Person.model';

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
    <div>
      {student.name}
    </div>
  );
}

export default App;
