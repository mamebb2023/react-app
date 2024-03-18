import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "London", "Japan", "Los Angles", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
