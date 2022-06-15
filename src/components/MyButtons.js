import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RefreshIcon from '@mui/icons-material/Refresh';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import MySlider from './MySlider';

const SortButton = ({ sortMethod }) => (
  <Button
    onClick={sortMethod}
    variant={"contained"}
    size={"small"}
  >
    Sort
  </Button>
)

function RefreshButton({ refresh, setRefresh }) {
  return (
    <Button
      onClick={() => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }
      }
      variant={"contained"}
      size={"small"}
    >
      <RefreshIcon />
    </Button>
  )
}

const ArraySwitch = ({max, setMax}) => {
  // const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setMax(event.target.value);
  };
  return (
    <div>
      <Radio
        checked={max === '5'}
        onChange={handleChange}
        value="5"
        name="radio-buttons"
        inputProps={{ 'aria-label': '5' }}
      />
      <Radio
        checked={max === '10'}
        onChange={handleChange}
        value="10"
        name="radio-buttons"
        inputProps={{ 'aria-label': '10' }}
      />
    </div>
  );
}

const ArraySizeButton = ({ arraySize, setMax }) => (
  <Button
    onClick={() => {
      setMax(arraySize);
    }}
    variant={"contained"}
    size={"small"}
  >
    {arraySize}
  </Button>
)

const ButtonGrid = ({ sortMethod, refresh, setRefresh, max, setMax, speed, setSpeed }) => (
  <Box className="button-grid">
    <Grid container spacing={2}>
      {/* <Grid item xs={2}>
          <ArraySizeButton arraySize={5} setMax={setMax} />
      </Grid>
      <Grid item xs={2}>
        <ArraySizeButton arraySize={10} setMax={setMax} />
      </Grid> */}
      <Grid item xs={1}>
          <ArraySwitch max={max} setMax={setMax} />
      </Grid>
      <Grid item xs={1}>
        <SortButton sortMethod={sortMethod} />
      </Grid>
      <Grid item xs={1}>
        <RefreshButton refresh={refresh} setRefresh={setRefresh} />
      </Grid>
      <Grid item xs={4}>
        <MySlider speed={speed} setSpeed={setSpeed} />
      </Grid>
    </Grid>
  </Box>

)

const ButtonBox = ({ sortMethod, refresh, setRefresh, setMax, speed, setSpeed }) => (
  <Box className="button-box" >
    <List sx={{ margin: 'auto' }}>
      <ListItem >
        <ListItemText children="Array Size" />
        <ArraySizeButton arraySize={5} setMax={setMax} />
      </ListItem>
      <ListItem >
        <ListItemText children="Array Size" />
        <ArraySizeButton arraySize={10} setMax={setMax} />
      </ListItem>
      <ListItem >
        <ListItemText children="Sort" />
        <SortButton sortMethod={sortMethod} />
      </ListItem>
      <ListItem >
        <ListItemText />
        <RefreshButton refresh={refresh} setRefresh={setRefresh} />
      </ListItem>
      <ListItem >
        <MySlider speed={speed} setSpeed={setSpeed} />
      </ListItem>
    </List>
  </Box>

)

export { ButtonBox, ButtonGrid }