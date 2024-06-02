import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const btnList = ["All", ...new Set(data.map((item) => item.category))];
console.log(btnList);
function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(btnList);
  const filterItems = (category) => {
    if (category === "All") {
      setItems(data);
      return;
    }
    const newItem = data.filter((item) => item.category === category);
    setItems(newItem);
  };
  return (
    <main>
      <section>
        <div className="title">menu list</div>
        <hr />
      </section>
      <section>
        <Categories categories={categories} filterItems={filterItems} />
      </section>
      <section>
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
