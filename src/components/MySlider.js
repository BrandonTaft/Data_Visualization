import Slider from '@mui/material/Slider';
// eslint-disable-next-line no-unused-vars
function MySlider({ speed, setSpeed }) {
    const marks = [
        {
            value: 0,
            label: '0s',
        },
        {
            value: 1000
        },
        {
            value: 2000,
            label: '2s',
        },
        {
            value: 3000
        },
        {
            value: 4000,
            label: '4s',
        },
        {
            value: 5000
        },
        {
            value: 6000,
            label: '6s',
        },
        {
            value: 7000
        },
        {
            value: 8000,
            label: '8s',
        },
        {
            value: 9000,
        },
        {
            value: 10000,
            label: '10',
        },
    ];

    const handleChange = (event, newValue) => {
        setSpeed(newValue);
    };

    return (
        <Slider
            aria-label="Speed Slider"
            size="large"
            step={1000}
            marks={marks}
            defaultValue={3000}
            max={10000}
            valueLabelDisplay="off"
            orientation='vertical'
            onChange={handleChange}
        />
    )
}

export default MySlider