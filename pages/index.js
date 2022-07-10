import HomeBackground from "../src/components/HomeBackground";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";
import Switch from "../src/components/MySwitch";

function Home() {

  function lightMode(){
document.getElementById("bgWrap").classList.toggle("light-mode");
document.getElementById("header-container").classList.toggle("light-mode");
document.getElementById("footer").classList.toggle("light-mode");
const collection = document.getElementsByClassName("card");
for (let i = 0; i < collection.length; i++) {
  collection[i].classList.toggle("light-mode");
}
  }
  return (
  <>
  <HomeBackground />
  <Header />
  <Switch handleChange={lightMode}/>
    <div className="home-content">      
      <BubbleCard />
      <InsertionCard />
      <SelectionCard />
      <BucketCard />
      <MergeCard />
      <QuickCard />
    </div>
  <Footer />
    </>  
  )
}

export default Home;
