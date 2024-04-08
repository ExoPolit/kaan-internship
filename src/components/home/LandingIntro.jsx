import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                className="bg-color-2 i-boxed icon_wallet"
                data-aos="fade-in"
                data-aos-delay="500"
                data-aos-duration="1500"
                data-aos-mirror="true"
              ></i>
              <div className="text">
                <h4
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="650"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Set up your wallet
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                className="wm icon_wallet"
                data-aos="fade-in"
                data-aos-delay="700"
                data-aos-duration="2000"
                data-aos-mirror="true"
              ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                className="bg-color-2 i-boxed icon_cloud-upload_alt"
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-duration="1500"
                data-aos-mirror="true"
              ></i>
              <div className="text">
                <h4
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Add your NFT's
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                className="wm icon_cloud-upload_alt"
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-duration="2000"
                data-aos-mirror="true"
              ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                className="bg-color-2 i-boxed icon_tags_alt"
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-duration="1500"
                data-aos-mirror="true"
              ></i>
              <div className="text">
                <h4
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="850"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Sell your NFT's
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-delay="950"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                className="wm icon_tags_alt"
                data-aos="fade-in"
                data-aos-delay="650"
                data-aos-duration="2000"
                data-aos-mirror="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
