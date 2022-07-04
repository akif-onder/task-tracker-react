import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = () => {

  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({name:"SHOW ADD TASK BAR", bgcolor:"purple"})

  const handleShow = () => {

    if (show) {
      setBtnStyle({
        name:"SHOW ADD TASK BAR", bgcolor:"purple"
      })
    }else{
      setBtnStyle({
        name:"SHOW ADD TASK BAR", bgcolor:"red"
      });

    };
    setShow(!show);
  };
  console.log(show);

  return (
  <header className="header">
    <h1>TASK TRACKER</h1>
    <button onClick={handleShow} className="btn" style={{backgroundColor: btnStyle.bgcolor}}>{btnStyle.name}</button>
    {show && <AddTaskForm/>}  
</header>
  )
};

export default Header;
