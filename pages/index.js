import HomeBackground from "../src/components/HomeBackground";
import Header from "../src/components/Header";
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";

function Home() {

  return (
  <>
  <HomeBackground />
  <Header />
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
