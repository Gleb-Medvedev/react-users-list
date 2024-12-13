import './success.css'

export function ConfirmComponent({ arrayOfInvitedUsers = [], arrayOfAllUsers = [], invitedUsersCount }) {
    return (
        <div className="success">
            <div className="success__image-container">
                <img className='success__img' src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg" alt="check-img" />
            </div>
            <h3 className="success__title">
                Пользователь(-ей) к рассылке: <span className='success__count'>{invitedUsersCount}</span>
            </h3>
            <ul className="success__list">
                {
                    arrayOfAllUsers.filter(obj => {
                        return (arrayOfInvitedUsers.indexOf(obj.id) >= 0)
                    }).map((item, index) => {                            
                        return (
                            <li className="success__list-item" key={index}>
                                {item.first_name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}