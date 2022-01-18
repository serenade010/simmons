import { React, useEffect, useState } from 'react';
import './view.css';
import 'axios';
import axios from 'axios';
import Loader from 'react-loader-spinner';

function View() {
  const [materials, setMaterials] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_url = 'https://python-nccu-mis.herokuapp.com/inventory';

  const fetchData = async () => {
    axios.get(api_url).then((response) => {
      setMaterials(response.data['materials']);
      setProducts(response.data['products']);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="view">
        <div className="component-view">
          <div className="view-title">Component View</div>
          <div className="loading-container">
            <Loader type="Oval" color="#777" height={100} width={100} />
          </div>
        </div>
        <div className="product-view">
          <div className="view-title">Product View</div>
          <div className="loading-container">
            <Loader type="Oval" color="#777" height={100} width={100} />
          </div>
        </div>
      </div>
    );
  } else
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
