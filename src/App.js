import "./App.css";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Rating from "./components/Rating";
import Review from "./components/Review";

function App() {
  const ratingContent = ["Reviews", "Report Guru", "BestTech"];

  return (
    <>
      <Header />
      <Content />
      {/* {ratingContent.map((v) => {
        return <Rating rating={v} />;
      })} */}
      <Rating rating={ratingContent} />
      <Review />
    </>
  );
}

export default App;
