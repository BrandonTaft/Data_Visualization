import MySlider from "./MySlider";
import { SortButton, RefreshButton } from "./MyButtons";

const ButtonBox = ({ sortMethod, refresh, setRefresh, speed, setSpeed, setFinished, isRunning }) => (
  <div className="button-box" >
    <div className="action-buttons">
      <SortButton
        sortMethod={sortMethod}
        isRunning={isRunning}
      />
      <RefreshButton
        refresh={refresh}
        setRefresh={setRefresh}
        // setFinished={setFinished}
        isRunning={isRunning}
      />
    </div>
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