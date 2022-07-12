import Header from "../src/components/Header";
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";
import LightSwitch from "../src/components/LightSwitch";

function Home() {

  return (
    <>
      <Header />
      <LightSwitch />
      <div className="home-content">
        <BubbleCard />
        <InsertionCard />
        <SelectionCard />
        <BucketCard />
        <MergeCard />
        <QuickCard />
      </div>
    </>
  )
}

export default Home;
