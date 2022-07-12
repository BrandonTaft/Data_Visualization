import Image from "next/image";
import { useTheme } from 'next-themes';

const LightSwitch = () => {

  // const [darkMode, setDarkMode] = useState("false")
  const { theme, setTheme } = useTheme()
  function changeMode() {
    // const light = document.getElementsByClassName("light");
    // for (let i = 0; i < light.length; i++) {
    //   light[i].classList.toggle("dark");
    // }
    // darkMode == "false" ? setDarkMode("true") : setDarkMode("false");
    // localStorage.setItem("dark-mode", darkMode)
    theme == "light" ? setTheme("dark") : setTheme("light");
    
  }


  return (
    <div className="switch-container">
    <Image src="/icons/night-mode.png" alt="github" layout="intrinsic" width={30} height={30} />
    <label className="switch">
      <input type="checkbox" onChange={changeMode} />
      <span className="switcher round"></span>
    </label>
    <Image src="/icons/brightness.png" alt="github" layout="intrinsic" width={30} height={30} />
    </div>
  )
}


export default LightSwitch