import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Rugbrød", description: "Et lækkert rugbrød", price: "25 DKK" },
  { id: 2, name: "Hvedebrød", description: "Et klassisk hvedebrød", price: "20 DKK" },
  { id: 3, name: "Franskbrød", description: "Et blødt franskbrød", price: "18 DKK" },
];

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Produkt ikke fundet</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Pris: {product.price}</p>
    </div>
  );
}

