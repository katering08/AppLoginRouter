import {NavLink} from 'react-router-dom';
function NavBarItems({label, uri}){
  return (
    <li>
      <NavLink to={uri}>{label}</NavLink>
    </li>
  );
}

export default NavBarItems;