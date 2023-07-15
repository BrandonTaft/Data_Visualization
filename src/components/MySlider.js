import ReactSlider from 'react-slider';

export default function MySlider({ speed, setSpeed }) {
    const handleChange = (newValue) => {
        setSpeed(newValue * 100);
    };
    return (
            <ReactSlider
                min={0}
                max={100}
                marks={25}
                value={speed / 100}
                orientation='vertical'
                invert
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                markClassName="mark"
                onChange={handleChange}
                renderThumb={(props, state) => <div {...props}>{Math.round(state.valueNow / 10) + "s"}</div>}
            />
    )
}