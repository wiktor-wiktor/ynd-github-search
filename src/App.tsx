import "./app.module.scss";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

const App = () => {
  return (
    <div className="app">
      <Card>
        <h1>Card</h1>
        <Button caption="Hello" />
        <Button caption="World" primary />
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          eligendi dolorem blanditiis! Doloribus, accusamus fugiat illum
          cupiditate et voluptate fugit veniam rem doloremque voluptas sequi
          quod pariatur!
        </p>
      </Card>
    </div>
  );
};

export default App;
