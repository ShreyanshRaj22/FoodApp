import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch(
        "https://food-app-backend-rho.vercel.app/api/foodData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ "objectFit": "contain !important" }}>
          <div className="carousel-inner">
            <div className='carousel-caption' style={{ "zIndex": "10" }}>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
            <div className="carousel-item active">

              <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat
          ? foodCat.map((data) => {
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-4"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No Such data found</div>
                )}
              </div>
            );
          })
          : ""}
      </div>
      <Footer />
    </div>
  );
}
