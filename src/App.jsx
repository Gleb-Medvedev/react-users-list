import './App.css'
import { useEffect, useState } from 'react'
import { UserItemComponent } from './assets/components/UserItemComponent/UserComponent';
import { ConfirmComponent } from './assets/components/Confirm/success';
import { SkeletonItem } from './assets/components/SkeletonComponent/Skeleton'

function App() {
  const [users, setUsers] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [arrayOfInvitedUsers, setArrayOfInvitedUsers] = useState([]);
  const [invitesSubmitted, setInvitesSubmitted] = useState(false);
  
  function addOrRemoveUser(id) {
    arrayOfInvitedUsers.includes(id) ? setArrayOfInvitedUsers(prev => prev.filter(userid => userid !== id)) : setArrayOfInvitedUsers(prev => [...prev, id]);
  }

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => setUsers(json.data))
    .catch(err => {
      console.log(err);      
    })
    .finally(() => setloaded(true));
  }, [])

  return (
    <div className="container">
      {
        !invitesSubmitted && (
          <div className="users">
          <input
            className='users__search'
            type="text" placeholder='Поиск людей, почты...'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <ul className="users__list">
           {
                loaded ? (
                  users.filter(elem => {
                    const fullName = elem.first_name + ' ' + elem.last_name;
                        return (
                            fullName.includes(searchValue.toLocaleLowerCase())
                            || elem.email.toLowerCase().includes(searchValue.toLowerCase())
                        ) ? true : false
                    }).map(user => {
                        const fullName = user.first_name + ' ' + user.last_name;
                        return (
                            <UserItemComponent
                                key={`Пользователь ${user.first_name} с ID ${user.id}`}
                                avatar={user.avatar}
                                fullname={fullName}
                                email={user.email}
                                onClickInvite={() => addOrRemoveUser(user.id)}
                                isInvited={!arrayOfInvitedUsers.includes(user.id)}
                            />
                        )
                    })
                ) : (
                    <>
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                    </>
                )
           }
        </ul>
        <button
          className='users__btn'
          disabled={!arrayOfInvitedUsers || !arrayOfInvitedUsers.length}
          title={arrayOfInvitedUsers.length ? 'Отправить приглашение(-я) выбранным пользователям!' : 'Нет выбранных пользователей для отправки приглашений!'}
          onClick={() => setInvitesSubmitted(true)}>Invite Users
        </button>
      </div>
        )
      }
      {
        invitesSubmitted && <ConfirmComponent arrayOfAllUsers={users} arrayOfInvitedUsers={arrayOfInvitedUsers}  invitedUsersCount={arrayOfInvitedUsers.length} />
      }
    </div>
  )
}

export default App