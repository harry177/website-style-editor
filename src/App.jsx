import { Header } from "./components/Header/Header";
import { EditedPage } from "./components/EditedPage/EditedPage";
import { MainMenu } from "./components/MainMenu/MainMenu";
import "./App.css";

function App() {
  
  return (
    <>
      <Header />
      <main className="main">
        <section className="workspace">
          <EditedPage />
        </section>
        <MainMenu />
      </main>
    </>
  );
}

export default App;
