import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductModal = ({ show, onHide, onSave, product }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null); // State for image file
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setImage(null); // Clear image for edit
        } else {
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setImage(null); // Clear image for add
        }
    }, [product]);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        axios.get('http://127.0.0.1:8000/api/api/categories/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = () => {
        const productData = new FormData(); // Use FormData for file upload
        productData.append('name', name);
        productData.append('description', description);
        productData.append('price', price);
        productData.append('category', category);
        if (image) {
            productData.append('image', image); // Add the image file
        }

        onSave(productData, product ? product.id : null); // Pass the product ID for editing
    };

    if (!show) return null;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className="modal-title">{product ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h5>
                        <div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onHide}></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">إسم المنتج</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">نبذة عن المنتج</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">السعر</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">الصنف</label>
                                <select
                                    className="form-select"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">الصورة</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={e => setImage(e.target.files[0])} // Capture the selected file
                                    accept="image/*"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
