import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductTable from './ProductTable';
import ProductModal from './ProductModal';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const baseUrl = 'http://127.0.0.1:8000/api/api';


    useEffect(() => {

        const token = localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Fetch categories
        axios.get(`${baseUrl}/categories/`)
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        let url = `${baseUrl}/products/`;
        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }
        axios.get(url)
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, [selectedCategory]);

    const handleAddProduct = () => {
        setCurrentProduct(null);
        setShowModal(true);
    };

    const handleEditProduct = (product) => {
        setCurrentProduct(product);
        setShowModal(true);
    };

    const handleSaveProduct = (productData, productId) => {
        const apiUrl = productId 
            ? `${baseUrl}/products/${productId}/` 
            : `${baseUrl}/products/`;
    
        const request = productId 
            ? axios.put(apiUrl, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }) 
            : axios.post(apiUrl, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
        request
            .then(response => {
                if (productId) {
                    setProducts(products.map(p => (p.id === response.data.id ? response.data : p)));
                } else {
                    setProducts([...products, response.data]);
                }
            })
            .catch(error => {
                console.error('Error saving product', error);
            })
            .finally(() => {
                setShowModal(false);
            });
    };
    
    const handleDeleteProduct = (id) => {
        axios.delete(`${baseUrl}/products/${id}/`)
            .then(() => {
                setProducts(products.filter(p => p.id !== id));
            });
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">لوحة التحكم</h1>
            <div className="mb-3 d-flex justify-content-between">
                <select className="form-select w-auto" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">الكل</option>
                    {categories.map(category => (
                        <option key={category.name} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button className="btn btn-primary" onClick={handleAddProduct}>إضافة منتج جديد</button>
                <button className="btn btn-danger py-0" onClick={handleLogout}>تسجيل خروج</button>
            </div>
            <ProductTable
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
            />
            <ProductModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={handleSaveProduct}
                product={currentProduct}
            />
        </div>
    );
};

export default AdminPage;
