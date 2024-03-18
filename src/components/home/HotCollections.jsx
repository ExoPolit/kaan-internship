//Owl, Slick or Keen?
//
//Owl provides more options to style the carousel, whilst being fairly easy to implement
//Slick was the easiest to implement but not as stylish as Owl
//Keen was the most difficult to implement out of the three and their documentation was insufficient

import $ from "jquery";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const owlCarouselRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      )
      .then(function (response) {
        console.log("data received", response.data);
        setCollections(response.data);
        setLoading(false);
        initializeOwlCarousel(); // Call the function to initialize Owl Carousel after fetching data
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const initializeOwlCarousel = () => {
    if (owlCarouselRef.current && collections.length > 0) {
      $(owlCarouselRef.current).owlCarousel({});
    }
  };

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
          {loading ? (
            <div className="skeleton-box">
              {[...Array(4)].map((_, index) => (
                  <div key={index} className="nft_coll">
                    <div></div>
                    <div>
                      <i className="fa fa-check"></i>
                    </div>
                    <div></div>
                  </div>
              ))}
            </div>
          ) : (
            <OwlCarousel
              className="owl-carousel"
              ref={owlCarouselRef}
              margin={10}
              loop
              items={4}
              nav
              dots={false}
              lazyLoad
              responsiveClass={true}
              responsive={{
                0: {
                  items: 1,
                },
                740: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
                1400: {
                  items: 4,
                },
              }}
            >
              {collections.map((collection, index) => (
                <div key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={collection.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={collection.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{collection.title}</h4>
                      </Link>
                      <span>ERC-{collection.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
