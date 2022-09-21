import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,

} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div> 
        <img className='h-10 w-10' src="https://links.papareact.com/drq" alt='' />
        <SidebarRow Icon={HomeIcon} title='Home' />
        
         </div>
  )
}

export default Sidebar