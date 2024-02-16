import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItem from './NavItem';

 function Header() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (event,itemName) => {
    //event.preventDefault();
    setActiveItem(itemName);
  };

  const toggleNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    } else {
      navbar.classList.add('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-box-shadow" style={{backgroundColor:'#4932A2'}}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{color:'white'}}>BlogSite</a>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="navbar-collapse justify-content-center collapse" id="navbarNav">
        <ul className="navbar-nav ">
            <NavItem itemName="Home" activeItem={activeItem} handleItemClick={(event,itemName)=>handleItemClick(event,itemName)} />
            <NavItem itemName="About" activeItem={activeItem} handleItemClick={(event,itemName)=>handleItemClick(event,itemName)} />
            <NavItem itemName="Blog" activeItem={activeItem} handleItemClick={(event,itemName)=>handleItemClick(event,itemName)} />
            <NavItem itemName="Contact" activeItem={activeItem} handleItemClick={(event,itemName)=>handleItemClick(event,itemName)} />
         </ul>
        </div>
       </div>
     
       <div className="d-none d-lg-block">
          <ul className="navbar-nav">
             <NavItem icon="Facebook" activeItem={activeItem} handleItemClick={(event,icon)=>handleItemClick(event,icon)} />
             <NavItem icon="Instagram" activeItem={activeItem} handleItemClick={(event,icon)=>handleItemClick(event,icon)} />
             <NavItem icon="Twitter" activeItem={activeItem}  handleItemClick={(event,icon)=>handleItemClick(event,icon)} />
             <NavItem icon="Linkedin" activeItem={activeItem} handleItemClick={(event,icon)=>handleItemClick(event,icon)}  /> 
          </ul>
        </div>
    </nav>
  )
}


export default Header;