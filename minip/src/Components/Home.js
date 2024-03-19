import React from "react";
import "./Home.css";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
function Home() {
  return (
    <div className="Home ">
      <HomeHeader />
      <div class="content">
        <img
          src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80"
          alt="Norway"
          className="w-100 h-100"
        />
        <div class="text-block">
          <h1>SHOP</h1>
          <h4>Till You DROP..</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;