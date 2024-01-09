import React from 'react'

const ProfileCard = ({ user }) => {
    const { login, avatar_url, bio, created_at, followers, following, html_url, location, name, public_repos, type } = user

    const created = `${new Date(created_at).getDate()}-${new Date(created_at).getMonth()}-${new Date(created_at).getFullYear()}`

  return (
    <div className='main-card'>
        <div className="profile-photo">
            <img src={avatar_url} alt={type} id='photo'/>
            <a href={html_url}>{name !== null ? name : login}</a>
        </div>
        <div className="details">
            <p>
                <span>Name</span> : {name !== null ? name : login}</p>
            <p><span>Bio</span> : {bio}</p>
            <p><span>Followers</span> : {followers}</p>
            <p><span>Following</span> : {following}</p>
            <p><span>Repos</span> : {public_repos}</p>
            <p><span>Location</span> : {location}</p>
            <p><span>Created</span> : {created}</p>
        </div>
    </div>
  )
}

export default ProfileCard