import Header from "../src/components/Header";
import Card from "../src/components/Card";
import LightSwitch from "../src/components/LightSwitch";

function Home() {
  return (
    <>
      <Header />
      <div className="home-switch">
        <LightSwitch />
      </div>
      <div className="home-content">
        <Card type={"bubble"}/>
        <Card type={"insertion"}/>
        <Card type={"selection"}/>
        <Card type={"quick"}/>
      </div>
    </>
  )
}

export default Home;
