import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const LightSwitch = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(false);
  const handleToggle = (event) => {
    setChecked(event.target.checked);
    event.target.checked == true ? setTheme("dark") : setTheme("light");
  };
  // On 1st render the theme is set according to value of "theme" in localStorage  
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
    theme == "light" ? setChecked(false) : setChecked(true)
  }, [])

  
    return (
      <>
        <input
          checked={checked}
          onChange={handleToggle}
          className="switch ignore"
          id={`switch-id`}
          aria-label='controlled-switch'
          type="checkbox"
        />
        <label
          className="switch-label ignore"
          htmlFor='switch-id'
        >
          <span className="switch-button ignore" />
        </label>
      </>
    );
  }

  export default LightSwitch