import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Rugbrød", description: "Et lækkert rugbrød" },
  { id: 2, name: "Hvedebrød", description: "Et klassisk hvedebrød" },
  { id: 3, name: "Franskbrød", description: "Et blødt franskbrød" },
];

export function ProductsPage() {
  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`}>Se detaljer</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


