function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className="item" key={id}>
            <img className="pic" src={img} alt={title} />
            <div>
              <header className="header">
                <h2>{title}</h2>
                <h3>{price}</h3>
              </header>

              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
