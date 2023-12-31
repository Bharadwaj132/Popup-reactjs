// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="Home-container">
    <Header />
    <div className="home-image-container">
      <img
        className="mobile-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="desktop-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
