import React, { useEffect, useState } from "react";
import axios from "axios";
import SkeletonCard from "../UI/SkeletonCard";
import Card from "../UI/Card";

const AuthorItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect = () => {
    axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012")
    .then(function(response) {
      setItems(response.data)
      // console.log(response.data)
      setLoading(false);
    })
    .catch(function(error) {
      setLoading(false);
    })
  }

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading ? (
            <>
              {new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <SkeletonCard />
                </div>
              ))}
            </>
          ) : (
            items.map((item) => (
              <div className="col-md-3" key={item.id}>
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
