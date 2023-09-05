import React from "react";
import "./App.css";
import ChoclatePack from "./components/ChoclatePack.js";

const App = () => {
  const chocolates = [
    {
      id: 1,
      name: "Milk Chocolate",
      price: 2.5,
      src: "https://media.gettyimages.com/id/1178767060/photo/heap-of-chocolate-bars.jpg?s=1024x1024&w=gi&k=20&c=ACHcPp-jWRBLzNe6JsKmZGKiFhxdZtlXGxpykWTDizw=",
    },
    {
      id: 2,
      name: "Dark Chocolate",
      price: 3.0,
      src: "https://media.gettyimages.com/id/103453599/photo/valentines-day-heart-shaped-chocolates.jpg?s=1024x1024&w=gi&k=20&c=De5FaJRPGlVFnsiHgD1dL-s0iL6N7lhnrOLFEdXQ3m8=",
    },
    {
      id: 3,
      name: "Milky bar",
      price: 4.0,
      src: "https://media.gettyimages.com/id/186822131/photo/box-of-chocolates.jpg?s=1024x1024&w=gi&k=20&c=LQb0JLl67zweElUgirWW0lH6Z2el2fh-aXbkmLvCU0M=",
    },
    {
      id: 4,
      name: "Cocoa solid",
      price: 3.0,
      src: "https://media.gettyimages.com/id/131549968/photo/chocolate-candy-in-heart-shaped-box.jpg?s=1024x1024&w=gi&k=20&c=-10NspQ5bIcXZj2Av_3gKrqvDfnpSc0-LsC7yabeKC4=",
    },
    {
      id: 5,
      name: "Cadbury",
      price: 6.0,
      src: "https://media.gettyimages.com/id/1160983618/photo/homemade-chocolate-candies-for-valentines-day-on-dark-background.jpg?s=1024x1024&w=gi&k=20&c=CwFhT7ZIav8OaAthE0eeCHgts5NV6h20XyR7q6TIsAQ=",
    },
    {
      id: 6,
      name: "Twix",
      price: 5.0,
      src: "https://media.gettyimages.com/id/200425107-001/photo/box-of-chocolates-one-missing-overhead-view.jpg?s=1024x1024&w=gi&k=20&c=4ka15SFrRvhg9_ojXyJ4Rpy1mS23_C2y5Whet5KChxw=",
    },
    {
      id: 7,
      name: "Ruby",
      price: 10.0,
      src: "https://media.gettyimages.com/id/504712713/vector/chocolate.jpg?s=1024x1024&w=gi&k=20&c=Fgb4zws3LxZZneCCm64vW_sr5CdVP1g88CdcePh5qj4=",
    },
    {
      id: 8,
      name: "Kit Kat",
      price: 4.0,
      src: "https://media.gettyimages.com/id/1129245428/photo/valentines-day-chocolate.jpg?s=1024x1024&w=gi&k=20&c=zY6niy9YetmlDILldPp4swdvnJT5egmydCKntTlWzZc=",
    },
    {
      id: 9,
      name: "Aero",
      price: 8.0,
      src: "https://media.gettyimages.com/id/936205852/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=1024x1024&w=gi&k=20&c=K7i16a3LPD3H-Y0FFFPGtbf_JJVWicn-VhvL-pIcKQA=",
    },
    {
      id: 10,
      name: "Amul",
      price: 7.0,
      src: "https://media.gettyimages.com/id/183359376/photo/double-chocolate-chip-muffin.jpg?s=1024x1024&w=gi&k=20&c=fCHwP152I8mKvMNrFJPaw1Oo9Tnicul1BZrokYdsU98=",
    },
    {
      id: 11,
      name: "Campco",
      price: 9.0,
      src: "https://media.gettyimages.com/id/155150650/photo/group-of-truffles.jpg?s=1024x1024&w=gi&k=20&c=75Tci4AGxtWcJvzaPUwLFW69AFXPn8F5dAw-4-n6Ltw=",
    },
    {
      id: 12,
      name: "Barone",
      price: 6.0,
      src: "https://media.gettyimages.com/id/1310156586/photo/close-up-of-christmas-decoration-on-table-against-black-background.jpg?s=1024x1024&w=gi&k=20&c=dc_BhUBqaKtLZKtTm-DfmHUtGQ-MfHyG9wh26J7Xh_4=",
    },
    {
      id: 13,
      name: "ButterFinger",
      price: 5.0,
      src: "https://media.gettyimages.com/id/1292056069/photo/overhead-view-of-mixed-chocolate-truffles-on-a-table-with-chocolate-flakes.jpg?s=1024x1024&w=gi&k=20&c=PwfBGUgHtwH7fA120hpeS-7OtRaEI1ERxDU9ZbZ1hdk=",
    },
    {
      id: 14,
      name: "Hershey",
      price: 2.0,
      src: "https://media.gettyimages.com/id/183414940/photo/assorted-chocolate-box.jpg?s=1024x1024&w=gi&k=20&c=wCHSTyWUyUVcRY_QB3hLfZ-jacVrtzFRI014AFPMb7A=",
    },
    {
      id: 15,
      name: "Snickers",
      price: 1.0,
      src: "https://media.gettyimages.com/id/1296695541/photo/valentines-day-chocolate-gift.jpg?s=1024x1024&w=gi&k=20&c=qkTcd9Xb7Cu7E3C3QWaz37Wxzn7GPfVIvg1cjB1f-iA=",
    },
  ];

  return (
    <div className="App">
      <ChoclatePack chocolates={chocolates} />
    </div>
  );
};

export default App;
