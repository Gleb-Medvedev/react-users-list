import { useEffect, useState } from 'react'
import './App.css'
import { UsersListComponent } from './assets/components/UsersComponent/Users'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
      console.log(json.data);
      
    })
    .catch(err => {
      console.log(err);      
    })

  }, [])

  return (
    <div className="container">
      <UsersListComponent datalist={users} />
    </div>
  )
}

export default App