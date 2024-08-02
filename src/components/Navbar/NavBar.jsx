import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaFacebook, FaInfo, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const navs = ['Home','About', 'What We Do', 'Publications'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMediumUp = useMediaQuery('(min-width:800px)');
  const [isVisible, setIsVisible] = useState(true);
  const [scrollUp, setScrollUp] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
        setScrollUp(false);
      } else {
        setIsVisible(true);
        setScrollUp(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`nav-bar ${scrollUp ? 'nav-bar-scroll-up' : ''}`} 
        sx={{ backgroundColor: "white" }}
      >
        <nav className={`navbar ${isVisible ? '' : 'navbar--hidden'}`}>
          <div className="navbar-content">
            <a href="#about" className="navbar-link-top"><FaInfo /> About</a>
            <a href="#home" className="navbar-link-top"><FaFacebook />Facebook</a>
            <a href="#contact" className="navbar-link-top"><FaInstagram />Instagram</a>
          </div>
        </nav>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMediumUp ? (
              <div className='nav'>
                <div className='logo'>  
                  <NavLink className="navlink" to='/'>
                    <img
                      src="/y men.png" 
                      alt="logo" 
                      style={{ marginRight: 8, height: "50px" }} 
                    />
                  </NavLink>
                  <NavLink className="navlink" to='/'>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="#app-bar-with-responsive-menu"
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        textAlign: "right",
                        fontFamily: 'Courier',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#030749',
                        textDecoration: 'none',
                      }}
                    >
                      NAIROBI CLUB
                    </Typography>
                  </NavLink>
                </div>
                <div className='navs'>
                  <Box sx={{ flexGrow: 1, fontFamily: 'Courier', display: { xs: 'none', md: 'flex' } }}>
                    {navs.map((n) => (
                      <NavLink className="navlink" to={n === 'Home' ? "/" : n}>
                        <Button
                          key={n}
                          onClick={handleCloseNavMenu}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#030749";
                            e.target.style.color = "white";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "#030749";
                          }}
                          sx={{
                            my: 2,
                            color: '#030749',
                            marginLeft: "50px",
                            border: '1px solid #030749',
                            fontFamily: "Courier",
                            fontWeight:'900',
                            display: 'block'
                          }}
                        >
                          {n}
                        </Button>
                      </NavLink>
                    ))}
                  </Box>
                </div>
              </div>
            ) : null}
            {!isMediumUp ? (
              <img 
                src="/y men.png" 
                alt="logo" 
                style={{ marginRight: 8, height: "40px" }} 
              />
            ) : null}
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
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {navs.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink className="navbar-link" to={page === "Home" ? "/" : page}>
                      <Typography textAlign="center" sx={{ fontFamily: "Courier", fontWeight: 900, color: '#030749' }}>{page}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Courier',
                fontWeight: 700,
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
    </>
  );
}

export default NavBar;
