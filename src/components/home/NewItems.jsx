import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Skeleton from "../UI/Skeleton";
import Countdown from "../UI/Countdown";
const NewItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);  

  useEffect(() => {
    axios
      .get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
      )
      .then(function (response) {
        setItems(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, []);



  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading ? (
            <>
              <OwlCarousel
                className="owl-carousel"
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
                {[...Array(4)].map((_, index) => (
                  <div key={index}>
                    <div className="nft__item">
                      <Skeleton
                        className="lazy img-fluid"
                        width="300px"
                        height="350px"
                      />
                      <div className="author_list_pp">
                        <Skeleton
                          width="60px"
                          height="60px"
                          border-radius="50%"
                          className="lazy"
                          alt=""
                        />
                      </div>
                        <i className="fa fa-check"></i>
                      <div className="de_countdown">
                        <Skeleton width="30px" height="15px" />
                      </div>

                      <div className="nft__item_wrap">
                        <div className="nft__item_extra">
                          <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                              <h4>Share</h4>
                              <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                              </a>
                              <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Skeleton
                            width="160px"
                            height="15px"
                            className="lazy nft__item_preview"
                          />
                        </div>
                      </div>
                      <div className="nft__item_info">
                        <Skeleton width="160px" height="15px" />
                        <h4>
                          <Skeleton width="60px" height="15px" />
                        </h4>
                        <div className="nft__item_price">
                          <Skeleton width="30px" height="15px" />
                        </div>
                        <div className="nft__item_like">
                          <i className="fa fa-heart"></i>
                          <span>
                            <Skeleton width="30px" height="15px" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </>
          ) : (
            <OwlCarousel
              className="owl-carousel"
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
              {items.map((item, index) => (
                <div key={index}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link
                        to={`/author/${item.authorId}`}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={`Creator: ${item.authorId}`}
                      >
                        <img className="lazy" src={item.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="de_countdown"><Countdown item={item}/></div>

                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button>Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <Link to={`/item-details/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to={`/item-details/${item.nftId}`}>
                        <h4>{item.title}</h4>
                      </Link>
                      <div className="nft__item_price">{item.price}</div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{item.likes}</span>
                      </div>
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

export default NewItems;
