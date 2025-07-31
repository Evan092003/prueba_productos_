import { useState, useEffect } from 'react';

function ProductForm({ onSubmit, selectedProduct, onDelete }) {
  const [product, setProduct] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    if (selectedProduct) setProduct(selectedProduct);
    else setProduct({ name: '', price: '', category: '' });
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category) return;
    onSubmit(product);
    setProduct({ name: '', price: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="form-control mb-2"
      />
      <input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Precio"
        className="form-control mb-2"
      />
      <input
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Categoría"
        className="form-control mb-2"
      />
      <button className="btn btn-primary me-2" type="submit">
        {selectedProduct ? 'Actualizar' : 'Crear'}
      </button>
      {selectedProduct && (
        <button className="btn btn-danger" type="button" onClick={() => onDelete(selectedProduct)}>
          Eliminar
        </button>
      )}
    </form>
  );
}

export default ProductForm;