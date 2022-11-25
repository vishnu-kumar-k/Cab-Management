import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../images/slider8.jpg";
import slider4 from "../images/slider10.jpg";
import '../css/slider.css';
function Slider() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carousel variant="dark">
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    {/* <h3>Book Your safe Ride</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>

                
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    {/* <h3>
                      A mission to deliver world class taxi service experience
                    </h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
