import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import RefreshIcon from "@mui/icons-material/Refresh";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MySlider from "./MySlider";


const SortButton = ({ sortMethod }) => (
  <button
    onClick={sortMethod}
    variant={"contained"}
    size={"small"}
    aria-label={"Start Sorting Button"}
  >
    SORT
  </button>
)

function RefreshButton({ refresh, setRefresh }) {
  return (
    <button
      onClick={() => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }
      }
      aria-label={"Refresh Button"}
      variant={"contained"}
      size={"small"}
    >
      <RefreshIcon />
    </button>
  )
}

const ArraySwitch = ({ max, setMax }) => {
  // const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setMax(event.target.value);
  };
  return (
    <FormControl sx={{ flexDirection: "row" }}>

      <FormLabel
        sx={{
          margin: "auto",
          color: "white",
          fontFamily: "'Fira Sans Condensed', sans-serif",
          "&.Mui-focused": { color: "white" }
        }} >
        Length
      </FormLabel>

      <RadioGroup row sx={{ marginLeft: "10px" }}>

        <FormControlLabel
          value="5"
          size="medium"
          onChange={handleChange}
          label="5"
          control={
            <Radio
              size="small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white"
                },
              }} />
          } />


        <FormControlLabel
          value="10"
          size="medium"
          onChange={handleChange}
          label="10"
          control={
            <Radio
              size= "small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white"
                },
              }} />
          } />

      </RadioGroup>
    </FormControl>
  );
}

const ArraySizeButton = ({ arraySize, setMax }) => (
  <button
    onClick={() => {
      setMax(arraySize);
    }}
    variant={"contained"}
    size={"small"}
    aria-label={"Set Array Size"}
  >
    {arraySize}
  </button>
)

const ButtonBox = ({sortMethod, refresh, setRefresh, max, setMax, speed, setSpeed }) => (

    <Box className="button-box" >
      <List sx={{padding:"0", textAlign:"center"}}>
      {/* <ListItemText children="Array Size" disableTypography />
        <ListItem >
          <ArraySizeButton arraySize={5} setMax={setMax} />
          <ArraySizeButton arraySize={10} setMax={setMax} />
        </ListItem> */}
        <ListItem >
          <SortButton sortMethod={sortMethod} />
        </ListItem>
        <ListItem >
          <RefreshButton refresh={refresh} setRefresh={setRefresh} />
        </ListItem>
        <ListItem className="slider-label" >
          Speed
        </ListItem>
        <ListItem className="slider">
          <MySlider speed={speed} setSpeed={setSpeed} />
        </ListItem>
      </List>
    </Box>

)


export { ButtonBox}