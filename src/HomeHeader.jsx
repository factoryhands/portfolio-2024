import React from 'react';
import "tailwindcss/tailwind.css";
import "./App.css";

function YourPage() {
  return (
    <div class="grid grid-cols-12 gap-4 pt-36">
      <h1 class="col-span-12 mb-12 text-center border-b-2">
        Jennifer <br/> Spriggs
      </h1>
      <h2 class="col-start-3 col-span-8 mb-12 text-4xl">
    I am a product designer who enjoys building beautiful things.
</h2>
      <p class="col-start-5 col-span-6">
        Currently a product designer working in tech at Replit. Formerly Dropbox and Google. In another era I designed beauty and baby products for Proctor & Gamble, clothing for American Eagle and Abercrombie & Fitch.
        My expertise lies in finding what people desire.
      </p>
    </div>
  );
}

export default YourPage;