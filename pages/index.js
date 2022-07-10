import HomeBackground from "../src/components/HomeBackground";
import Header from "../src/components/Header";
import { BubbleCard, BucketCard, InsertionCard, SelectionCard, MergeCard, QuickCard } from "../src/components/Card";
import Switch from "../src/components/MySwitch";

function Home() {

  function lightMode() {
    document.getElementById("bgWrap").classList.toggle("light-mode");
    document.getElementById("footer").classList.toggle("light-mode");
    const cardContent = document.getElementsByClassName("card-content");
    for (let i = 0; i < cardContent.length; i++) {
      cardContent[i].classList.toggle("light-mode");
    }
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("light-mode");
    }
    const contentDescription = document.getElementsByClassName("content-description");
    for (let i = 0; i < contentDescription.length; i++) {
      contentDescription[i].classList.toggle("light-mode");
    }

  }
  return (
    <>
      <HomeBackground />
      <Header />
      <Switch handleChange={lightMode} />
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
