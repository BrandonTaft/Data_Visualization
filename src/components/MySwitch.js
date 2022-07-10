import Image from "next/image";

const Switch = ({ handleChange }) => {

  return (
    <div className="switch-container">
    <Image src="/icons/night-mode.png" alt="github" layout="intrinsic" width={30} height={30} />
    <label className="switch">
      <input type="checkbox" onChange={handleChange} />
      <span className="switcher round"></span>
    </label>
    <Image src="/icons/brightness.png" alt="github" layout="intrinsic" width={30} height={30} />
    </div>
  )
}


export default Switch