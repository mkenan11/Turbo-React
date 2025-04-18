import React from "react";
import CarCard from "../../Components/CarCard";
import "./style.css";


const cars = [
  {
    id: 1,
    title: "BMW X5",
    description: "Luxury SUV",
    image:
      "https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=",
    releaseYear: 2021,
    price: "$50,000",
    engine: "V6",
    horsepower: "300 HP",
    color: "Black",
    mileage: "50,000 km",
    owner: "John Doe",
  },
  {
    id: 2,
    title: "Audi A6",
    description: "Executive sedan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-m8agvwgxlYEztUJ7oGX6FgY2hZH2JblUw&s",
    releaseYear: 2020,
    price: "$40,000",
    engine: "V8",
    horsepower: "350 HP",
    color: "White",
    mileage: "30,000 km",
    owner: "Jane Smith",
  },
  {
    id: 3,
    title: "Mercedes-Benz C-Class",
    description: "Comfort and performance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVTBfYb1wgjUX96zKUYxbZ6lYT22m3UWZ-g&s",
    releaseYear: 2022,
    price: "$45,000",
    engine: "I4 Turbo",
    horsepower: "255 HP",
    color: "Silver",
    mileage: "20,000 km",
    owner: "Ali Veli",
  },
  {
    id: 4,
    title: "Toyota Camry",
    description: "Reliable and efficient",
    image:
      "https://media.istockphoto.com/id/905266220/photo/toyota-camry-in-motion.jpg?s=612x612&w=0&k=20&c=QdZEGEqUZz9PANdkgrJLENekgoW9H56gkD7PXzgsKDM=",
    releaseYear: 2019,
    price: "$25,000",
    engine: "I4",
    horsepower: "203 HP",
    color: "Blue",
    mileage: "60,000 km",
    owner: "Sara Lee",
  },
  {
    id: 5,
    title: "Tesla Model 3",
    description: "Electric innovation",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*",
    releaseYear: 2023,
    price: "$55,000",
    engine: "Electric",
    horsepower: "283 HP",
    color: "Red",
    mileage: "15,000 km",
    owner: "Elon Junior",
  },
  {
    id: 6,
    title: "Ford Mustang",
    description: "American muscle car",
    image:
      "https://www.usnews.com/object/image/00000193-d1b1-d12e-afbb-ffbb8ca30000/01-usnpx-2025fordmustang-angularfront-jms.jpg?update-time=1734389894124&size=responsiveGallery",
    releaseYear: 2018,
    price: "$35,000",
    engine: "V8",
    horsepower: "450 HP",
    color: "Yellow",
    mileage: "70,000 km",
    owner: "Mike Speed",
  },
  {
    id: 7,
    title: "Hyundai Tucson",
    description: "Modern compact SUV",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    releaseYear: 2021,
    price: "$30,000",
    engine: "I4",
    horsepower: "187 HP",
    color: "Grey",
    mileage: "40,000 km",
    owner: "Lale Ismayilova",
  },
  {
    id: 8,
    title: "Porsche Cayenne",
    description: "Luxury performance SUV",
    image:
      "https://www.shutterstock.com/image-photo/super-car-porche-911-carrara-260nw-2407874987.jpg",
    releaseYear: 2022,
    price: "$85,000",
    engine: "V6 Twin-Turbo",
    horsepower: "434 HP",
    color: "Black",
    mileage: "10,000 km",
    owner: "Arda Güler",
  },
  {
    id: 9,
    title: "Honda Civic",
    description: "Compact and fuel-efficient",
    image:
      "https://media.istockphoto.com/id/899251594/photo/honda-civic-sedan-on-the-street.jpg?s=612x612&w=0&k=20&c=BnuYTyY0BmCA2zrUaPdAAq2cMH2-lF12hsDuOsJRZ3w=",
    releaseYear: 2020,
    price: "$22,000",
    engine: "I4",
    horsepower: "158 HP",
    color: "White",
    mileage: "35,000 km",
    owner: "Nigar Quliyeva",
  },
  {
    id: 10,
    title: "Chevrolet Corvette",
    description: "Sports car legend",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtPieGZIGoneIHP6vLNTbyhqYRyIFv031wg&s",
    releaseYear: 2023,
    price: "$70,000",
    engine: "V8",
    horsepower: "495 HP",
    color: "Red",
    mileage: "5,000 km",
    owner: "Jack Thunder",
  },
];

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">Car List</h1>
        <div className="car-list">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
