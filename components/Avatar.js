import React from 'react'

const Avatar = ({url,className}) => {
    return (
        <img loading='lazy' className={`h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-110  rounded-full ${className}`} src={url} alt="profile pic" />
    )
}

export default Avatar
