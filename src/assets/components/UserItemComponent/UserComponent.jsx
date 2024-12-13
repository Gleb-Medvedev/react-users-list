import './user.css';

export function UserItemComponent({ avatar, fullname, email, onClickInvite, isInvited }) {
    return (
        <li className="users__list-item user">
            <div className="user-body">
                <div className="user-body__avatar">
                    <img
                        className='user-body__avatar-img'
                        src={avatar}
                        alt={`аватар пользователя ${avatar}`}
                />
                </div>
                <div className="user-body__fullname">
                    <h3>
                        { fullname }
                    </h3>
                    <a href={`mailto: ${ email }`}
                        className="user-body__email">
                        { email }
                    </a>
                </div>
                <button
                    style={{color: isInvited ? 'rgb(27, 160, 67)':'red'}}
                    onClick={onClickInvite}
                    title={!isInvited ? `Удалить пользователя ${fullname} из рассылки` : `Добавить пользователя ${fullname} в рассылку`}
                    className="user-body__btn"
                >
                        {!isInvited ? '-' : '+'}
                </button>
            </div>
        </li>
    )
}