import { React, useEffect, useState } from 'react';
import './view.css';
import 'axios';
import axios from 'axios';

function View() {
  const [materials, setMaterials] = useState([]);
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    axios
      .get('https://simmons-stage-backend.herokuapp.com/inventory')
      .then((response) => {
        setMaterials(response.data['materials']);
        setProducts(response.data['products']);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="view">
      <div className="component-view">
        <div className="view-title">Component View</div>
        {materials.map((material) => {
          return (
            <div className="view-material">
              <span>{material.material_name}</span>
              <span>{material.on_hand_balance}</span>
            </div>
          );
        })}
      </div>
      <div className="product-view">
        <div className="view-title">Product View</div>
        {products.map((porducts) => {
          return (
            <div className="view-products">
              <span>{porducts.product_name}</span>
              <span>{porducts.on_hand_balance}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default View;
