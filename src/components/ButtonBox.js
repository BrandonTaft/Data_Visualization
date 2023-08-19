import MySlider from "./MySlider";
import { SortButton, RefreshButton } from "./MyButtons";

const ButtonBox = ({ sortMethod, refresh, setRefresh, speed, setSpeed, isRunning }) => (
  <div className="button-box" >
    <div className="action-buttons">
      <SortButton
        sortMethod={sortMethod}
        isRunning={isRunning}
      />
      <RefreshButton
        refresh={refresh}
        setRefresh={setRefresh}
        isRunning={isRunning}
      />
    </div>
    <button>MUTE</button>
    <div className="slider-container">
      
      <div className="slider-label" >
        SPEED
      </div>
        <MySlider
          speed={speed}
          setSpeed={setSpeed}
          isRunning={isRunning}
        />
        </div>
   
  </div>
)

export default ButtonBox