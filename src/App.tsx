import "./app.module.scss";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { SearchResults } from "./components/SearchResults/SearchResults";

const App = () => {
  return (
    <div className="app">
      <Card>
        <h1>Github repositories explorer</h1>
        <SearchBox />
        <SearchResults />
      </Card>
    </div>
  );
};

export default App;
