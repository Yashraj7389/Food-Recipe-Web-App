import React, { use, useEffect, useState } from "react";

const Meal = () => {
  const [meal, setMeal] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );

      const data = await api.json();
      console.log(data.meals);

      setMeal(data.meals);
    };

    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputData}`
    );

    const data = await api.json();
    console.log("search data = ", data.meals);
    setMeal(data.meals);
  };

   
   

  

  return (
    <div>
      <div className="bg-[linear-gradient(90deg,_#A100FF_0%,_#71C4FF_100%)] bg-[length:100%_100%] bg-[0px_0px] flex items-center justify-evenly h-15 rounded-t-[8px]">
        <form onSubmit={submitHandler} className="flex justify-around w-80">
          <input
            onChange={(e) => setInputData(e.target.value)}
            className="bg-gray-100  p-1 mx-2 rounded-full w-full border-1 border-black"
            placeholder="Search Recipe..."
            type="text"
          />
        </form>
        <div>
          <h1 className=" text-center text-3xl font-bold rounded p-8">
            {" "}
            Well-Come to Yashraj Rajput TastyNest
          </h1>
        </div>
        <div className="gap-3 flex justify-evenly">
          <button className="  text-lg text-white text-semibold rounded my-4 w-20 transition-transform duration-300 hover:scale-110 hover:text-black ">
            Home
          </button>
          <button className="  text-lg text-white text-semibold rounded my-4 w-20transition-transform duration-300 hover:scale-110 hover:text-black ">
            blog
          </button>
          <button className="  text-lg text-white text-semibold rounded my-4 w-20 transition-transform duration-300 hover:scale-110 hover:text-black">
            About Us
          </button>
          {/* <button className =' text-lg text-white text-semibold rounded my-4 w-20 transition-transform duration-300 hover:scale-110'>About Us</button> */}
        </div>
      </div>

      <div className="flex justify-evenly shadow px-22 w-[95%] m-auto my-3 bg-gray-200">
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className="  text-lg text-black text-semibold rounded my-4  transition-transform duration-300 hover:scale-110  px-4 hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:text-white font-semibold"
        >
          Indain
        </button>

        

        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="  text-lg text-black text-semibold rounded my-4  transition-transform duration-300 hover:scale-110  px-4 hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:text-white font-semibold"
        >
          Canadian
        </button>

        <button
          onClick={() => setArea("American")}
          type="button"
          className="  text-lg text-black text-semibold rounded my-4  transition-transform duration-300 hover:scale-110  px-4 hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:text-white font-semibold"
        >
          American
        </button>

        <button
          onClick={() => setArea("Thai")}
          type="button"
          className="  text-lg text-black text-semibold rounded my-4  transition-transform duration-300 hover:scale-110  px-4 hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:text-white font-semibold"
        >
          Thai
        </button>

        <button
          onClick={() => setArea("Russian")}
          type="button"
          className="  text-lg text-black text-semibold rounded my-4  transition-transform duration-300 hover:scale-110  px-4 hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:text-white  font-semibold"
        >
          Russian
        </button>
      </div>

      <div className="grid grid-cols-4 my-3 gap-5 rounded-lg mx-5  hover:cursor-pointer ">
        {meal.map((data) => (
          <div
            className="shadow w-[90%] m-auto overflow-hidden  "
            key={data.id_Meal}
          >
            <img
              className=" rounded  transition-transform duration-300 hover:scale-110 object-fit "
              src={data.strMealThumb}
              alt=""
            />
            <h1 className=" text-center text-xl font-bold mt-2 rounded text-gray-800  ">
              {data.strMeal}
            </h1>
            <p className="p-2 text-gray-400 text-center sm">
              Tender, juicy beef brisket stacked high on rye bread, slathered
              with mustard – a Canadian classic you’ll crave again and again.
              see more...
            </p>
            <div className=" gap-3 flex justify-evenly">
              <button className="p-2 bg-cyan-400 text-lg text-white text-semibold rounded my-4 w-40 transition-transform duration-300 hover:scale-110 ">
                Yum! Add It
              </button>
              <button className="p-2 bg-rose-500 text-lg text-white text-semibold rounded my-4 w-40 transition-transform duration-300 hover:scale-110">
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
