-- Create the ecommerce schema
CREATE SCHEMA ecommerce;

-- Switch to the ecommerce schema
SET search_path TO ecommerce;

-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(255),
  price NUMERIC(10, 2),
  stock_quantity INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  googleId VARCHAR(100),
  facebookId VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  session_id VARCHAR(255) NOT NULL,      -- Stripe session ID
  total_amount NUMERIC(10, 2) NOT NULL,  -- Total price of the order
  status VARCHAR(50) DEFAULT 'pending',  -- Payment status
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order Items table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  product_name VARCHAR(255),
  quantity INT,
  unit_price NUMERIC(10, 2),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
