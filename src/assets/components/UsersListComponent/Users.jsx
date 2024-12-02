import { useState } from 'react'
import './users.css';
import { Children } from 'react';
import { SkeletonItem } from '../SkeletonComponent/Skeleton';
import { UserItemComponent } from '../UserItemComponent/UserComponent';

export function UsersListComponent({ datalist, loaded }) {
    const [searchValue, setSearchValue] = useState('');

    return (
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
                        datalist.map (user => {
                            return (
                                <li
                                    className="users__list-item user"
                                    key={`Пользователь ${user.first_name} с ID ${user.id}`}>
        
                                        <UserItemComponent
                                            avatar={user.avatar}
                                            fullname={`${ user.first_name } ${user.last_name}`}
                                            email={user.email}/>
                                </li>
                            )
                        })
                            ) : (
                                <>
                                    <SkeletonItem />
                                    <SkeletonItem />
                                    <SkeletonItem />
                                </>
                            )

                }
            </ul>
        </div>
    )
}