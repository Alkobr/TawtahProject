import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.error);
          setLoading(false);
        } else {
          localStorage.setItem('user', JSON.stringify({ name: formData.firstname, token: token }));
          localStorage.setItem('token', JSON.stringify({ token: json.token }));
          window.location.href = '/HomePage'; // Go to HomePage
        }
      })
      .catch(error => {
        setError('An error occurred. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
          <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
          <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange} />
          <input type="text" name="zipcode" placeholder="Zip Code" value={formData.zipcode} onChange={handleChange} />
          <input type="text" name="lat" placeholder="Latitude" value={formData.lat} onChange={handleChange} />
          <input type="text" name="long" placeholder="Longitude" value={formData.long} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/Login" className="login-link">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
