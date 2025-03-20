import { useState, useEffect, useRef } from 'react';
import logo from "../assets/img/simple/newlogo.png";
import arrowright from "../assets/img/simple/icon-black-long-arrow-right.svg";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [activeSubMenus, setActiveSubMenus] = useState([]);

  const menuRef = useRef(null);
  const menuMainRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveSubMenus([]);
        setCurrentMenuTitle('');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showSubMenu = (subMenuId, menuTitle) => {
    setActiveSubMenus([...activeSubMenus, subMenuId]);
    setCurrentMenuTitle(menuTitle);
  };

  const goBack = () => {
    if (activeSubMenus.length > 0) {
      const newActiveSubMenus = [...activeSubMenus];
      newActiveSubMenus.pop();
      setActiveSubMenus(newActiveSubMenus);
      setCurrentMenuTitle(newActiveSubMenus.length > 0 ? currentMenuTitle : '');
    }
  };

  const handleMenuClick = (e) => {
    if (!isMobile) return;
    
    const hasChildren = e.target.closest('.nav-item-has-children');
    if (hasChildren) {
      e.preventDefault();
      const subMenuId = hasChildren.querySelector('.sub-menu').id;
      const menuTitle = hasChildren.querySelector('.drop-trigger').textContent;
      showSubMenu(subMenuId, menuTitle);
    }
  };

  return (
    <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="global-container">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <Link to="/">
            <img src={logo} alt="AIMass" width={120} height={40} />
          </Link>

          {/* Header Navigation */}
          <div className={`menu-block-wrapper ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}
            <nav className={`menu-block ${isMobile ? (isMenuOpen ? 'active' : '') : ''}`}>
              {isMobile && (
                <div className={`mobile-menu-head ${activeSubMenus.length > 0 ? 'active' : ''}`}>
                  <div className="go-back" onClick={goBack}>
                    <img className="dropdown-icon" src={arrowright} alt="cheveron-right" width={16} height={16} />
                  </div>
                  <div className="current-menu-title">{currentMenuTitle}</div>
                  <div className="mobile-menu-close" onClick={toggleMenu}>×</div>
                </div>
              )}
              <ul className="site-menu-main" ref={menuMainRef} onClick={handleMenuClick}>
              <li className="nav-item">
                  <Link to='/' className="nav-link-item">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link-item">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/what-we-do" className="nav-link-item">What We Do</Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link-item">Services</Link>
                </li>
                {/* <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Services
                    <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                  </a>
                  <ul className={`sub-menu ${activeSubMenus.includes('submenu-2') ? 'active' : ''}`} id="submenu-2">
                    <li className="sub-menu--item">
                      <Link to="/service">Services</Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link to="/service-details">Service Details</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Pages
                    <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                  </a>
                  <ul className={`sub-menu ${activeSubMenus.includes('submenu-3') ? 'active' : ''}`} id="submenu-3">
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="/blog" data-menu-get="h3" className="drop-trigger">blogs
                        <img className="dropdown-icon" src={cheveronright} alt="cheveron-right" width={16} height={16} />
                      </Link>
                      <ul className={`sub-menu shape-none ${activeSubMenus.includes('submenu-4') ? 'active' : ''}`} id="submenu-4">
                        <li className="sub-menu--item">
                          <Link to="/blog">blogs</Link>
                        </li>
                        <li className="sub-menu--item">
                          <Link to="blog-details">blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <Link to="/career" data-menu-get="h3" className="drop-trigger">Career 
                       
                      </Link>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                      <Link to="/partners" data-menu-get="h3" className="drop-trigger"> Partners
                       
                      </Link>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                      <Link to="/features" data-menu-get="h3" className="drop-trigger"> Features
                       
                      </Link>
                      </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link to="/contact" className="nav-link-item">Contact</Link>
                </li> 
              </ul>
            </nav>
          </div>

          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <button type='button' className="button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white lg:inline-block">Login</button>
            <button type='button' className="button hidden rounded-[50px] border-black bg-black text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white lg:inline-block">Sign up free</button>
            {/* Responsive Offcanvas Menu Button */}
            {isMobile && (
              <div className="block lg:hidden">
                <button id="openBtn" className="hamburger-menu mobile-menu-trigger" onClick={toggleMenu}>
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;