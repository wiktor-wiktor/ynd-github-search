import "./app.module.scss";
import { Card } from "./components/Card/Card";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchProvider } from "./SearchReducer";

const App = () => {
  return (
    <div className="app">
      <SearchProvider>
        <Card>
          <h1>Github repositories explorer</h1>
          <SearchBox />
          <SearchResults />
        </Card>
      </SearchProvider>
    </div>
  );
};

export default App;
