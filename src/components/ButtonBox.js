import Box from "@mui/material/Box";
import MySlider from "./MySlider";
import { SortButton, RefreshButton } from "./MyButtons";

const ButtonBox = ({sortMethod, refresh, setRefresh, speed, setSpeed }) => (

    <Box className="button-box" >
      
        <Box className="action-buttons">
          <SortButton sortMethod={sortMethod} />      
          <RefreshButton refresh={refresh} setRefresh={setRefresh} />
        </Box>
        <Box className="slider-container">
        <Box className="slider-label" >
          SPEED
        </Box>
        <Box className="slider">
          <MySlider speed={speed} setSpeed={setSpeed} />
        </Box>
        </Box>
    </Box>

)


export default ButtonBox