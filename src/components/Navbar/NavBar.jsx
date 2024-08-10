import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navs = ['Home', 'About Us', 'Activities', 'Publications'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMediumUp = useMediaQuery('(min-width:800px)');
  const [isVisible, setIsVisible] = useState(true);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrollUp(currentScrollTop < lastScrollTop);
      setIsVisible(currentScrollTop <= lastScrollTop);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const renderNavLinks = (isMobile) => (
    navs.map((page) => (
      <NavLink
        className={isMobile ? 'navbar-link' : 'navlink'}
        to={page === 'Home' ? '/' : `/${page.replace(/\s+/g, '').toLowerCase()}`}
        key={page}
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#030749' : 'white',
          color: isActive ? 'white' : '#030749',
          marginLeft: isMobile ? 0 : '50px',
          border: isMobile ? 'none' : '1px solid #030749',
          fontFamily: 'Courier',
          fontWeight: 900,
          display: 'block',
          borderRadius: '5px',
          textDecoration: 'none',
          padding: isMobile ? '10px 20px' : '8px 16px',
          textAlign: isMobile ? 'center' : 'left',
        })}
      >
        {page}
      </NavLink>
    ))
  );

  return (
    <AppBar
      position="fixed"
      className={`nav-bar ${scrollUp ? 'nav-bar-scroll-up' : ''}`}
      sx={{ backgroundColor: 'white' }}
    >
      <nav className={`navbar ${isVisible ? '' : 'navbar--hidden'}`}>
        <div className="navbar-content">
          <a href="https://web.facebook.com/profile.php?id=100068102534792" className="navbar-link-top"><FaFacebook /> Facebook</a>
          <a href="#contact" className="navbar-link-top"><FaInstagram /> Instagram</a>
        </div>
      </nav>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMediumUp && (
            <div className="nav">
              <div className="logo">
                <NavLink className="navlink-logo" to="/">
                  <img
                    src="/ymen.png"
                    alt="logo"
                    style={{ marginRight: 8, height: '50px' }}
                  />
                </NavLink>
                  <Typography
                    className="navlink-logo"
                    variant="h6"
                    noWrap
                    component={NavLink}
                    to="/"  
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      textAlign: 'right',
                      fontFamily: 'Courier',
                      fontWeight: 700,
                      color: '#030749',
                      textDecoration: 'none',
                    }}
                  >
                    NAIROBI CLUB
                  </Typography>
              </div>
              <div className="navs">
                <Box sx={{ flexGrow: 1, fontFamily: 'Courier', display: { xs: 'none', md: 'flex' } }}>
                  {renderNavLinks(false)}
                </Box>
              </div>
            </div>
          )}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#030749' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {renderNavLinks(true)}
            </Menu>
          </Box>
          {!isMediumUp && (
            <NavLink className="navlink-logo" to="/">
              <img
                src="/ymen.png"
                alt="logo"
                style={{ marginRight: 8, height: '30px' }}
              />
            </NavLink>
          )}
          <Typography
            noWrap
            component={NavLink}
            to="/"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Courier',
              fontWeight: 700,
              fontSize:"15px",
              letterSpacing: '.3rem',
              color: '#030749',
              textDecoration: 'none',
            }}
          >
            NAIROBI CLUB
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
