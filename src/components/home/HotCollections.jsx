import React from "react";
import { Link } from "react-router-dom";
import CustomSlider from "../hoc/CustomSlider";
import "../../css/styles/btn.css";
import FetchData from "../hoc/FetchData";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();


const API_URL =
  "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections";

const HotCollections = () => {
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <FetchData apiUrl={API_URL} >
            {(fetchedData) => (
              <div className="slider-container" data-aos="fade-right" data-aos-duration="850">
                <CustomSlider  >
                  {fetchedData.map((item) => (
                    <div
                      className="col-lg col-md col-sm col-xs"
                      key={item.id}
                      
                    >
                      <div className="nft_coll" >
                        <div className="nft_wrap" >
                          <Link to={`/item-details/${item.nftId}`} >
                            <img
                              src={item.nftImage}
                              className="lazy img-fluid"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to={`/author/${item.authorId}`}>
                            <img
                              className="lazy pp-coll"
                              src={item.authorImage}
                              alt=""
                            />
                          </Link>
                          <i className="fa fa-check" ></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <h4>{item.title}</h4>
                          </Link>
                          <span>ERC-{item.code}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CustomSlider>
              </div>
            )}
          </FetchData>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
