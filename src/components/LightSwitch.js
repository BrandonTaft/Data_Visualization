import Image from "next/image";

const LightSwitch = () => {

  function lightMode() {
    const light = document.getElementsByClassName("dark");
    for (let i = 0; i < light.length; i++) {
      light[i].classList.toggle("light-mode");
    }

  }

  return (
    <div className="switch-container">
    <Image src="/icons/night-mode.png" alt="github" layout="intrinsic" width={30} height={30} />
    <label className="switch">
      <input type="checkbox" onChange={lightMode} />
      <span className="switcher round"></span>
    </label>
    <Image src="/icons/brightness.png" alt="github" layout="intrinsic" width={30} height={30} />
    </div>
  )
}


export default LightSwitch