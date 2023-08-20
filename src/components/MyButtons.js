import RefreshIcon from "@mui/icons-material/Refresh";

const SortButton = ({ sortMethod, isRunning }) => (
  <button
    onClick={sortMethod}
    className="button sort-button"
    aria-label="Start Sorting Button"
    disabled={isRunning ? true : false}
  >
    SORT
  </button>
)

function RefreshButton({ refresh, setRefresh, isRunning }) {
  return (
    <button
      onClick={() => {
        setRefresh(!refresh)
      }}
      className="button refresh-button"
      aria-label="Refresh Button"
      disabled={isRunning ? true : false}
    >
      <RefreshIcon size="small" />
    </button>
  )
}

const MuteButton = ({ isMuted, setIsMuted }) => (
  <button
    onClick={() => setIsMuted(!isMuted)}
    className="button mute-button"
    aria-label="Mute Button"
  >
    {isMuted ? "MUTED" : "MUTE"}
  </button>
)

export { RefreshButton, SortButton, MuteButton }