import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="App bg-warning">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
