import React, { useEffect, useState } from "react";
import "./Home.css";
import InfiniteScroll from "react-infinite-scroll-component";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=20"
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.errorMessage);
        }

        setItems(responseData.results);
      } catch (error) {
        console.log("" + error);
      }
    };

    getData();
  }, []);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/?page=2&results=20");
    const resData = await res.json();
    return resData;
  };

  const fetchData = async () => {
    const newUser = await fetchUser();
    setItems(items.concat(newUser.results));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-6 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5  font-weight-bold fs-5">
                Home
              </h5>

              <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <ul className="list-group">
                  {items.map((item) => {
                    return (
                      <li key={item.dob.date} className="list-group-item">
                        {item.name.title} . {item.name.first} {item.name.last}
                        <img
                          alt="img"
                          className="rounded-circle imgTag float-end"
                          src={item.picture.thumbnail}
                        />
                      </li>
                    );
                  })}
                </ul>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
