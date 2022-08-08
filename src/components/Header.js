const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="header-title-1 tiny">
        <span className="header-span">Sorting</span>
      </h1>
      <h1 className="header-title-2 tiny">
        <span className="header-span-2">Method</span>
      </h1>
      <h1 className="header-title-3 tiny">
        <span className="header-span-3">Visualizer</span>
      </h1>
    </div>
    <div className="svg-container">
      <svg className="wave" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 1920 81.717" enableackground="new 0 0 1920 81.717">
        <path
          d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
        </path>
      </svg>
    </div>
  </header>
);

export default Header;