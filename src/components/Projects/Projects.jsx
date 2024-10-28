import React from "react";
import Img1 from "../../assets/constructions/constructions-1.jpg";
import Img2 from "../../assets/constructions/constructions-2.jpg";
import Img3 from "../../assets/constructions/constructions-3.jpg";
import Img4 from "../../assets/constructions/constructions-4.jpg";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Project - 1",
    rating: 5.0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Project - 2",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Project - 3",
    rating: 4.7,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Project - 4",
    rating: 4.4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Project - 5",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "800",
  },
];

const Projects = () => {
  return (
    <div className="mt-8 mb-12">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-8 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Constructions
          </h1>
          <p data-aos="fade-up" className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* card section  */}
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            {ProductsData.map((items) => (
              <div
                data-aos-delay={items.aosDelay}
                data-aos="fade-up"
                key={items.id}
                className=" grid grid-cols-1 lg:grid-cols-2 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  gap-4"
              >
                <img
                  src={items.img}
                  alt=""
                  className="object-cover rounded-md"
                />
                <div className="lg:flex flex-col justify-center items-center">

                <div className="pl-4 pb-3">
                  <h3 className="text-xl font-bold">{items.title}</h3>
                  <p className="text-sm text-gray-600">{items.description}</p>
                </div>
                </div>
                
              </div>
            ))}
          </div>
          {/* veiw all Button  */}
          <div className="flex justify-center">
            <button className="bg-primary text-white px-4 py-1 rounded-md font-bold cursor-pointer text-center mt-10">
              veiw all Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
