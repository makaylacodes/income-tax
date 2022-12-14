import icon from "../images/talent-icon.svg";
import '../App.css';

const Nav = () => {
  
  return (
    <div className="nav-bar">
        <img src={icon} width={190} height={60}/>
      <div className="nav-items">
        <div className="item">
          <h3><a href="#">Contact</a></h3>
        </div>
        <div className="item">
          <h3><a href="#">About</a></h3>
        </div>
        <div className="item">
          <h3><a href="#">Tax Calculator</a></h3>
        </div>
      </div>
    </div>
  )
};

 export default Nav;