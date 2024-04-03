import React from "react";
import Skeleton from "./Skeleton";

function Card({ item }) {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Skeleton width="60px" height="60px" borderRadius="50px" />
        <i className="fa fa-check"></i>
      </div>
      <Skeleton className="lazy img-fluid" width="275px" height="300px" />
      <div className="de_countdown">
        <Skeleton width="60px" height="15px" />
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

        <img src={item.nftImage} className="lazy nft__item_preview" alt="" />
      </div>
      <div className="nft__item_info">
        <Skeleton width="160px" height="15px" />
        <div className="nft__item_price">
          <Skeleton width="60px" height="15px" />
        </div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>
            <Skeleton width="30px" height="15px" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
