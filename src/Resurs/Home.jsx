import axios from "axios";
import "../App.css"; // ვეძახით CSS ფაილს
import React, { useEffect, useState } from "react";
import Slideshow from "./Assests/Slideshow";

const Home = () => {
  const [photo, setPhoto] = useState(null); // მხოლოდ ერთი ფოტოს დასახვედრად

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/photos");
        setPhoto(response.data[0]); // მხოლოდ პირველი ფოტო
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto(); // გამოვიძახებთ fetchPhoto ფუნქციას
  }, []);

  return (
      <section>
      <Slideshow />
      </section>
  );
};

export default Home;
