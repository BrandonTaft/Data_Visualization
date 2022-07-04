
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";
import Background from "../src/components/Background";

function Home() {

  return (
    <><Background />
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