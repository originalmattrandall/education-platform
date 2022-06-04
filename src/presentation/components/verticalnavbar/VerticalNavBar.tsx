import './VerticalNavBar.scss'

import { useState } from 'react'
import { UserProfileHeader } from '../userprofileheader/UserProfileHeader'
import { VerticalUserNav } from '../verticalusernav/VerticalUserNav'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export const VerticalNavBar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle)
    }

    return (
        <div className={toggle ? 'vertical-nav-bar show' : 'vertical-nav-bar hide'}>
            <div className='vertical-nav-bar__toggle' onClick={toggleNav}>
                <div className={`vertical-nav-bar__icon ${toggle ? '' : 'rotate'}`}>
                    <ArrowBackIosNewIcon />
                </div>
            </div>

            <UserProfileHeader 
                imageSrc='https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                userName='Test UserName'
                profileLink=''/>

            <VerticalUserNav />
        </div>
    )
}