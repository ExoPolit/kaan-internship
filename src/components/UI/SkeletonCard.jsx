import React from "react";
import Skeleton from "./Skeleton";

function SkeletonCard() {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Skeleton width="60px" height="60px" borderRadius="50px" />
        <i className="fa fa-check"></i>
      </div>
      <Skeleton className="lazy img-fluid" width="100%" height="300px" />
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

export default SkeletonCard;
