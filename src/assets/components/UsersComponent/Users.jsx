import { useState } from 'react'
import './users.css';
import { Children } from 'react';

export function UsersListComponent({ datalist, ...props }) {
    const [searchValue, setSearchValue] = useState('');

    console.log(props);
    

    return (
        <div className="users">
            <input
                className='users__search'
                type="text" placeholder='Поиск людей, почты...'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)} />
            <ul className="users__list">
                {
                    datalist.map((user) => {
                        const fullName = user.first_name + ' ' + user.last_name;

                        return (
                            <li
                                className="users__list-item user"
                                key={`Пользователь ${user.first_name} с ID ${user.id}`}>
                                    <div className="user-body">
                                        <div className="user-body__avatar">
                                            <img
                                                className='user-body__avatar-img'
                                                src={user.avatar}
                                                alt={`аватар пользователя ${user.avatar}`} />
                                        </div>
                                        <div
                                            className="user-body__fullname">
                                        <h3>
                                            {fullName}
                                        </h3>
                                        <a
                                            href={`mailto: ${user.email}`}
                                            className="user-body__email">
                                            { user.email }
                                        </a>
                                        </div>
                                        <button
                                            className="user-body__btn">
                                            +
                                        </button>
                                    </div>                                    
                            </li>
                        )
                })}
            </ul>
        </div>
    )
}