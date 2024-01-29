import logo from"../../assets/images/logo.png"
import "./home.css"

const Home = () => {
  return (
    <>
    <container>
      <section className="home-container">
      <img src={logo} alt="" />
      </section>
      <section className="home-container">
      <h1>COLLECTIVE</h1>
      </section>
      <section className="home-container">
      <h1>CAFE</h1>
      </section>
    </container>
    </>
  )
}

export default Home