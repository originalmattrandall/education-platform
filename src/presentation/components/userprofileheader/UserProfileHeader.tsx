import './UserProfileHeader.scss'

interface UserProfileHeaderParams {
    imageSrc: string,
    userName: string,
    profileLink: string
}

export const UserProfileHeader = ({imageSrc, userName, profileLink}: UserProfileHeaderParams) => {
    return <div className='user-profile-header'>
        <div className='user-profile-details'>

            <div className='user-profile-details__user-photo'>
                <img src={imageSrc}></img>
            </div>

            <div className='user-profile-details__username'>
                <p>{userName}</p>
                <a className='user-profile-details__profile-link' href={profileLink}>View Profile</a>
            </div>
            
        </div>
    </div>
}