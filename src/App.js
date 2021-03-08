import logo from "./logo.svg";
import "./App.css";
import News from "./Components/News/News";
import Header from "./Components/Header/Header";
import TopHeadline from "./Components/TopHeadline/TopHeadline";

function App() {
  return (
    <div>
      <button class="btn btn-danger">Click me</button>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
