import { AppBar, Toolbar, Button } from '@mui/material';
import logo from "../Images/LogoOrion.jpg";
import { useState, useEffect } from 'react';

function Header() {
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Cambiar el valor según lo que desees
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpieza al desmontar el componente
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: transparent ? "transparent" : "#111",
        top: 0,
        left: 0,
        right: 0,
        transition: "background-color 0.3s",
      }}
    >
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: "100px", cursor: "pointer" }} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
