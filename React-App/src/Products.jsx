function Products() {
    const products = [
      { title: 'Cabbage', isFruit: false, id: 1 },
      { title: 'Garlic', isFruit: false, id: 2 },
      { title: 'Apple', isFruit: true, id: 3 },
    ];
    const listItems = products.map(product =>
      <li key={product.id}
      style={{color : product.isFruit ? 'magenta' : 'darkgreen' }}
      >
        {product.title}
      </li>
    );
  
    return (
        <div style={{border: '5px solid black'}}>
            <ul>{listItems}</ul>
        </div>
      )
  }

  export default Products