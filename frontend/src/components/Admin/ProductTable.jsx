import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>إسم المنتج</th>
                    <th>الصنف</th>
                    <th>السعر</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category_name}</td>
                        <td>LYD {product.price}</td>
                        <td>
                            <button className="btn btn-sm btn-warning ms-2" onClick={() => onEdit(product)}>
                                تعديل
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(product.id)}>
                                حذف
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
