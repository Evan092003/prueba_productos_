import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const API_URL = 'http://localhost:3000';

  const fetchProducts = () => {
    axios
      .get(`${API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error al obtener productos', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (product) => {
    try {
      if (product._id) {

        await axios.put(`${API_URL}/products/${product._id}`, product);
      } else {

        await axios.post(`${API_URL}/products`, product);
      }
      fetchProducts();
      setSelectedProduct(null);
    } catch (err) {
      console.error('Error al guardar producto', err);
    }
  };

  const handleDelete = async (product) => {
    try {
      await axios.delete(`${API_URL}/products/${product._id}`);
      fetchProducts();
      setSelectedProduct(null);
    } catch (err) {
      console.error('Error al eliminar producto', err);
    }
  };

  const filteredProducts = filteredCategory
    ? products.filter(p => p.category === filteredCategory)
    : products;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Productos</h1>

      <ProductForm
        onSubmit={handleSubmit}
        selectedProduct={selectedProduct}
        onDelete={handleDelete}
        onCancel={() => setSelectedProduct(null)}
      />

      <div className="mb-3">
        <label className="form-label">Filtrar por categoría:</label>
        <select
          className="form-select"
          value={filteredCategory}
          onChange={e => setFilteredCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {[...new Set(products.map(p => p.category))].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProducts} onSelect={setSelectedProduct} />

      {selectedProduct && (
        <ProductDetail product={selectedProduct} />
      )}
    </div>
  );
}

export default App;