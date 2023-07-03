import RefreshIcon from "@mui/icons-material/Refresh";

const SortButton = ({ sortMethod, isRunning }) => (

  <button
    onClick={sortMethod}
    id="sort-button"
    className="button sort-button"
    aria-label="Start Sorting Button"
    disabled={isRunning ? true : false}
  >
    SORT
  </button>
)

function RefreshButton({ refresh, setRefresh, setFinished, isRunning }) {
  return (
    <button
      onClick={() => {
        setFinished(false)
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }}
      id="refresh-button"
      className="button refresh-button"
      aria-label="Refresh Button"
      disabled={isRunning ? true : false}
    >
      <RefreshIcon size="small" />
    </button>
  )
}

export { RefreshButton, SortButton }