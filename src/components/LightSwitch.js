import * as React from 'react';
import Switch from '@mui/material/Switch';
//import Image from "next/image";
import { useTheme } from 'next-themes';

const LightSwitch = () => {

  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = React.useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  checked == true ? setTheme("dark") : setTheme("light");

  // function changeMode() {
  //   theme == "light" ? setTheme("dark") : setTheme("light");  
  // }


  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    // <div className="switch-container">
    // <Image src="/icons/brightness.png" alt="light-mode" layout="intrinsic" width={30} height={30} />
    // <label className="switch" aria-label="switch">
    //   <input id="toggle-switch" type="checkbox" onChange={changeMode} />
    //   <span className="switcher round"></span>
    // </label>
    // <Image src="/icons/night-mode.png" alt="dark-mode" layout="intrinsic" width={30} height={30} />
    // </div>
  )
}


export default LightSwitch