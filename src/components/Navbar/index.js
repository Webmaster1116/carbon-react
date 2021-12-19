import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../../images/logo1.png";
import {
  NavbarContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavLinksItem,
  NavLinksSpecial,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={Logo} alt="Logo" width={200} />
          </NavLogo>
          {/* <img src={Logo} alt="Logo" height={100} width={200} /> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksSpecial to="/yourrights">Your Rights</NavLinksSpecial>
            </NavItem>
            <NavItem>
              <NavLinksSpecial to="/purchaseconditions">
                Purchase Conditions
              </NavLinksSpecial>
            </NavItem>
          </NavMenu>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ height: "50px", marginTop: "15px" }}
          />
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="pricing"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="showcase"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Showcase
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="faq"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                FAQ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="" onClick={handleClick}>
                More
                <MdArrowDropDown />
              </NavLinks>
            </NavItem>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLinksItem to="/carbonanalysis" onClick={handleClose}>
                Carbon Analysis
              </NavLinksItem>
              <NavLinksItem to="/ourhypothesis" onClick={handleClose}>
                Our Hypyothesis
              </NavLinksItem>
              <NavLinksItem to="/ourforest" onClick={handleClose}>
                Our Forest
              </NavLinksItem>
              <NavLinksItem to="/projectprinciples" onClick={handleClose}>
                Project Principals
              </NavLinksItem>
            </Menu>
          </NavMenu>
          <NavBtn>
            <Button
              color="primary"
              LinkComponent={Link}
              to="/paidminting"
              variant="contained"
            >
              MINT
            </Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
