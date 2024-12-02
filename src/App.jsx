import { useEffect, useState } from 'react'
import './App.css'
import { UsersListComponent } from './assets/components/UsersListComponent/Users'

function App() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data);
      setLoaded(true);
      console.log(json.data);
      
    })
    .catch(err => {
      console.log(err);      
    })

  }, [])

  return (
    <div className="container">
      <UsersListComponent datalist={users} loaded={loaded} />
    </div>
  )
}

export default App