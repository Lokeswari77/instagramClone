import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Telegram } from '@mui/icons-material';

function Post({user,postImage,likes,timestamp}) {

  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
            <Avatar>{user[0].toUpperCase()}</Avatar>
            {user}.<span>{timestamp}</span>
            </div>
            <MoreHorizIcon />
        </div>
        <div className='post__image'>
            <img alt="" src={postImage} />
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='post__iconsMain'>
                    <FavoriteBorder className='postIcon' />
                    <ChatBubbleOutline className='postIcon' />
                    <Telegram className='postIcon' />
                </div>
                <div className='post__iconSave'>
                    <BookmarkBorder className='postIcon' />
                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post