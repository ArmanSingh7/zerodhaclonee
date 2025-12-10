import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("https://zerodhaclonee-rx1c.onrender.com/orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <Link to="/" className="btn">Place an Order</Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>

          {orders.map((order) => (
            <div className="order-card" key={order._id}>
              <h3>{order.name}</h3>
              <p><strong>Type:</strong> {order.mode.toUpperCase()}</p>
              <p><strong>Quantity:</strong> {order.qty}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
