import RefreshIcon from "@mui/icons-material/Refresh";

const SortButton = ({ sortMethod }) => (
  <button
    onClick={sortMethod}
    id="sort-button"
    className= "button sort-button"
    aria-label="Start Sorting Button"
  >
    SORT
  </button>
)

function RefreshButton({ refresh, setRefresh }) {
  return (
    <button
      onClick={() => {
        document.getElementById('finished2').classList.add("finished");
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }}
      id="refresh-button"
      className= "button refresh-button"
      aria-label="Refresh Button"
    >
      <RefreshIcon size="small" />
    </button>
  )
}

  // <ArraySizeButton arraySize={5} setMax={setMax} />

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

export { ArraySizeButton, RefreshButton, SortButton }