import React from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../store/login_state';
import { menuState } from '../store/menu_state';
import './top_menu.scss';

function TopMenu() {
  const menu = useRecoilValue(menuState)
  const user = useRecoilValue(loginState)

  const createItem = ({ href, text }) => (
    <li key={href}>
      <a href={href}>{text}</a>
    </li>
  )

  return (
    <div>
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <img className='avatar' src={user?.photoURL} alt={user?.displayName} />
        <ul className="pt-5">
          {menu.map(createItem)}
        </ul>
      </nav>

    </div>
  );
}

export default TopMenu;