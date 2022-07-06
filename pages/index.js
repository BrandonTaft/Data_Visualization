import Header from "../src/components/Header";
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";

function Home() {

  return (
  <>
  <Header />
    <div className="card-container">
      
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
