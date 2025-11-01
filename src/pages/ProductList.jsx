export default function ProductList() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(getProductsFromAPI, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There's an error: {error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {listOfProducts.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
function getProductsFromAPI() {
  const response = [];
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      response.push(...data);
      setIsLoading(false);
    })
    .catch(err => {
      setError(err);
      setIsLoading(false);
    })
    .finally(() => setIsLoading(false));
  return response;
}
