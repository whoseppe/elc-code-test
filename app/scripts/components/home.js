/* 
Purpose: Displays products based on users search results

Notes:
This is acting as the home screen component but is more like the search results page. Once again, I did the for simplicity.
*/

import React from "react";
import Product from "./product";
const Home = ({ searchResults }) => {
  return (
    <section id="home">
      <div className="content">
        {searchResults === null ? null : (
          <>
            {searchResults.length === 0 ? (
              <div className="help-wrap">
                <p className="help-text">Sorry, there are no results</p>
              </div>
            ) : (
              <>
                {searchResults.map((item) => (
                  <Product
                    key={item._id}
                    about={item.about}
                    name={item.name}
                    picture={item.picture}
                    price={item.price}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// Export out the React Component
export default Home;
