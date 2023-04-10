import React, { useState } from "react";
import data from "./data";
import { List } from "./components/List";
const App = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3 style={{ textAlign: "center" }}>{people.length} BirthYay</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          onClick={handleDelete}
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
