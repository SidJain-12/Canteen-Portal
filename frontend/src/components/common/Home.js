import { color } from "@mui/system";
import { useState, useEffect } from "react";
import picture from "../../images/home_img.jpg";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName("Dass TAs");
  // }, []);

  return <div style={{ textAlign: "center" }}> <p>Welcome Praaji</p> </div> ;
};

export default Home;
