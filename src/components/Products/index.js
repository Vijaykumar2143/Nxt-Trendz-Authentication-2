// Write your JS code here
import Header from '../Header'

import './index.css'

const Products = () => (
  <div>
    <Header />

    <div className="products-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
  </div>
)

export default Products
