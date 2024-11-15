import { makeStyles } from '@mui/styles';
import React from 'react'

function Header() {
    const classes = useStyle();
  return (
    <div>Header</div>
  )
}

const useStyle = makeStyles(() => ({
  root: {
  },
}));

export default Header