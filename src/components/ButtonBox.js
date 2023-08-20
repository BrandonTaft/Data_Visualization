import MySlider from "./MySlider";
import { SortButton, RefreshButton, MuteButton } from "./MyButtons";

const ButtonBox = ({ sortMethod, refresh, setRefresh, speed, setSpeed, isRunning, isMuted, setIsMuted }) => (
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
    <MuteButton
      isMuted={isMuted}
      setIsMuted={setIsMuted}
      isRunning={isRunning}
    />
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