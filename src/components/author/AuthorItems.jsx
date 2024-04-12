import React from "react";
import SkeletonCard from "../UI/SkeletonCard";
import Card from "../UI/Card";

const AuthorItems = ({ author }) => {
  const loading = !author || !Array.isArray(author.nftCollection);
  console.log(author)

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
            <div className="col-md-12">
              <div className="row">
                {author.nftCollection.map((nft) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                    key={nft.id}
                  >
                    <Card item={nft} author={author}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
