import ReactSlider from 'react-slider';

export default function MySlider({ speed, setSpeed }) {
    const handleChange = (newValue) => {
        setSpeed(newValue * 100);
    };
    return (
        <ReactSlider
            min={10}
            max={100}
            marks={[20, 40, 60, 80, 100]}
            value={speed / 100}
            orientation='vertical'
            invert
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            markClassName="mark"
            onChange={handleChange}
            ariaLabel="slider-thumb"
            ariaValuetext={state => `Thumb value ${Math.round(state.valueNow / 10) + "s"}`}
            renderThumb={(props, state) => <div {...props}>{Math.round(state.valueNow / 10) + "s"}</div>}
        />
    )
}