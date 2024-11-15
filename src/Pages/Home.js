
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../components/Header";

const Home = () =>{
    const classes = useStyle();
    return (
        <div>
            <Header />
        </div>
    )
}

const useStyle = makeStyles(() => ({
  root: {
  },
}));

export default Home