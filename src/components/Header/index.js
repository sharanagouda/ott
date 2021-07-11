import React from 'react';
import useWindowSize from '../../utils/useWindowSize';
import '../../styles/styles.css'
import BackIcon from '../../assets/Back.png';
import SearchIcon from '../../assets/search.png';

const Header = () => {
    const { width } = useWindowSize();
    return (
        <div className='headerContainer'>
            <div className="header-div" >
                <div className='iconWithTitle'>
                    <img src={BackIcon} className='icons' width="30" height="30"/>
                    <p className='headerTitle'>Romantic Comedy</p>
                    </div>
                    <img src={SearchIcon} className='icons' width="30" height="30"/>
            </div>
        </div>
      );
    }
export default Header;
