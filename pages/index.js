import Header from "../src/components/Header";
import { BubbleCard, InsertionCard, SelectionCard, QuickCard } from "../src/components/Card";
import LightSwitch from "../src/components/LightSwitch";

function Home() {

  return (
    <>
      <Header />
      <div className="home-switch">
        <LightSwitch />
      </div>
      <div className="home-content">
        <BubbleCard />
        <InsertionCard />
        <SelectionCard />
        <QuickCard />
      </div>
    </>
  )
}

export default Home;
