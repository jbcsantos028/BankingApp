import { Link } from "react-router-dom";
import './MainNavigation.css';
import { useLocation } from "react-router-dom";

const MainNavigation = props => {

  const location = useLocation();
  console.log(location);
  
  const navContent = () => {
    if (location.pathname !== '/') {
      if (props.accountType === 'customer') {
        return (
          <ul>
            <li><Link to='/transaction-history'>History</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        )
      } else if (props.accountType === 'employee') {
        return (
          <ul>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/accounts'>Accounts</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        )
      }
    }
  }
  
  const checkType = () => {
    console.log(props.accountType)
  }

  return (
    <header className="main-nav__header">
      <div className="main-nav__logo">ShawnPH Bank</div>
      <nav className="main-nav__nav">{navContent()}</nav>
      <button onClick={checkType}>Check acc type</button>
    </header>
  );
}

export default MainNavigation;