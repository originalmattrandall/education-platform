import './VerticalUserNav.scss'

import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';

import { IconTextLink } from '../icontextlink/IconTextLink';

export const VerticalUserNav = () => {
    return <div className='user-navigation'>
        <ul className='user-navigation__links'>
            <li>
                <IconTextLink text='Home' link='#' icon={<HomeIcon/>} active={true}/>
            </li>
            <li>
                <IconTextLink text='My Courses' link='#' icon={<MenuBookIcon />} active={false}/>
            </li>
            <li>
                <IconTextLink text='Students' link='#' icon={<PeopleIcon />} active={false}/>
            </li>
            <li>
                <IconTextLink text='Browse Courses' link='#' icon={<SearchIcon />} active={false}/>
            </li>
        </ul>
    </div>
}