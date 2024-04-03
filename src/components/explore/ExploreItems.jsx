import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import SkeletonCard from "../UI/SkeletonCard";

const ExploreItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
      .then(function (response) {
        setItems(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="row"> 
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Explore Items</h2>
            <div className="small-border bg-color-2"></div>
          </div>
        </div>
        {loading ? (
          <div className="col-md-3">
          <SkeletonCard />
          </div>
        ) : (
          items.map((item) => (
            <div className="col-md-3" key={item.id}>
              <Card item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreItems;
