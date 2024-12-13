import './skeleton.css';

export function SkeletonItem() {
    return (
        <li
            className="users__list-item user"
        >
            <div className="user_loading">
                loading...
            </div>
    </li>
    )
}