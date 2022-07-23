import Image from "next/image";
import { useTheme } from 'next-themes';

const LightSwitch = () => {

  const { theme, setTheme } = useTheme()

  function changeMode() {
    theme == "light" ? setTheme("dark") : setTheme("light");  
  }


  return (
    <div className="switch-container">
    <Image src="/icons/brightness.png" alt="light-mode" layout="intrinsic" width={30} height={30} />
    <label className="switch" aria-label="switch">
      <input id="toggle-switch" type="checkbox" onChange={changeMode} />
      <span className="switcher round"></span>
    </label>
    <Image src="/icons/night-mode.png" alt="dark-mode" layout="intrinsic" width={30} height={30} />
    </div>
  )
}


export default LightSwitch