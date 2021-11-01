import React from 'react';
import { useRecoilValue } from 'recoil';
import { menuState } from './menuState';
import './style.scss';

function TopMenu() {
  const menu = useRecoilValue(menuState)

  const createItem = ({ href, text }) => (<li><a href={href}>{text}</a></li>)

  return (
    <div>
      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          {menu.map(createItem)}
        </ul>
      </nav>
    </div>
  );
}

export default TopMenu;