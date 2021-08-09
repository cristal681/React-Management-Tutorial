
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Customer from './components/Customer'

const customers = [{
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/1',
  'name': '정다운',
  'brithday' : '951220',
  'gender' : '남자',
  'job': '대학생'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/2',
  'name': '정수진',
  'brithday' : '731110',
  'gender' : '남자',
  'job': '대학생'
},
{ 'id' : '3',
  'image' : 'https://placeimg.com/64/64/3',
  'name': '정주황',
  'brithday' : '951231',
  'gender' : '남자',
  'job': '대학생'
}
]

class App extends Component {
  render() {
  return (
    <div>
      {
        customers.map(c => {
          return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} brithday={c.brithday} gender={c.gender} job={c.job}/>);})}
    </div>
  );
}
}
export default App;
