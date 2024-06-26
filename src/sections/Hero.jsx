import Button from "../components/Button";
import { arrowRight } from "../../assets/icons";
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.</p>
        <Button label="Shop Now"
        iconURL={arrowRight}></Button>
      </div>

      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {
          statistics.map((stat, index))
        }
      </div>
    </section>
  )
}

export default Hero;