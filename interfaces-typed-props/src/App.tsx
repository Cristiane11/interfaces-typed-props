import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import PersonComponent from './components/PersonComponent';
import Status from './components/Status';
import Card from 'react-bootstrap/Card';

function App(){
  const student: Person = {
    name: 'John',
    age: 25,
  }

  
/* added code starts */
  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }



  return (
    <div className="container p-3">
      
       <Card>
        <Card.Body>
          <PersonComponent {...profileData}/>
        </Card.Body>
      </Card>
      <Status/>
    
    </div>
  );
}

export default App;
