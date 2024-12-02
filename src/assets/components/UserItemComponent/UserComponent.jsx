import './user.css';

export function UserItemComponent({ avatar, fullname, email }) {
    return (
        <div className="user-body">
            <div className="user-body__avatar">
                <img
                    className='user-body__avatar-img'
                    src={avatar}
                    alt={`аватар пользователя ${avatar}`}
                     />
            </div>
            <div
                className="user-body__fullname">
            <h3>
                { fullname }
            </h3>
            <a
                href={`mailto: ${ email }`}
                className="user-body__email">
                { email }
            </a>
            </div>
            <button
                className="user-body__btn">
                +
            </button>
        </div>
    )
}