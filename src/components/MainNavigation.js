import { Link } from "react-router-dom";
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header className="main-nav__header">
      <div className="main-nav__logo">ShawnPH Bank</div>
      <nav className="main-nav__nav">
        <ul>
          <li><Link to='/transactions'>Transactions</Link></li>
          <li><Link to='/accounts'>Accounts</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;