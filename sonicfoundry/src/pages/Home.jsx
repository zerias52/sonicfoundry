import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <h2>Welcome to the Sonic Foundry</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nam,
        repellendus? Corporis culpa esse exercitationem expedita hic laboriosam
        qui repudiandae suscipit vel voluptas. Accusantium quae quaerat quidem
        quos tenetur totam!
      </p>
      <img src="/images/sweetwater.jpg" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
        autem beatae consequuntur eum, eveniet excepturi exercitationem expedita
        explicabo harum neque omnis. Aperiam consectetur deleniti harum iure
        minima odit quibusdam? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ad, at blanditiis commodi culpa deleniti error ex ipsa
        itaque iusto magnam, modi nam officiis omnis praesentium quis sit sunt
        vel vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
        ad, dicta enim facilis nihil non officia, placeat ratione sed sequi unde
        veniam voluptatum. Alias blanditiis ea inventore necessitatibus nemo
        soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        aliquid aut cumque delectus distinctio doloribus eligendi enim esse,
        iste molestiae neque nesciunt nihil quae rem repudiandae similique ut
        voluptatum? Perspiciatis?
      </p>
      <Link to="/catalog" className="btn btn-primary btn-lg">
        <span>Check Out Our Catalog!</span>
        <i className="fa-solid fa-music"></i>
      </Link>
    </div>
  );
}

export default Home;
