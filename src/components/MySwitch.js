import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Switch = ({ max, setMax }) => {

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


export default Switch