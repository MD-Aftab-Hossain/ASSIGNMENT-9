

const providers = [
  {
    name: "Abigail P.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacrO36guVhvb9lmkCOOqAT9in-_4phDMqVw&s",
    description: "💼 MBA (Harvard), CFA Charterholder"
  },
  {
    name: "Shi Jie F.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM237tF21rpXqHZobg8H4k5mHIxYvh8RX_oQ&s",
    description: "📜 M.Ed. Curriculum Design, CELTA Certified"
  },
  {
    name: "Inés K.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08SZ38baOJKEtQ0bHCYBagFVTuI2DO89qSQ&s",
    description: "⚛️ Ph.D. Theoretical Physics, MIT Alumni"
  }
];

const Providers = () => {

  return (
    <div className="">
      <p className="text-4xl text-black font-bold text-center mt-20 my-10">Top Rated Providers</p>
      <div className="flex lg:flex-row sm:flex-row flex-col gap-5 text-center justify-between p-4">
        {providers.map((provider, index) => (
          <div key={index} className="p-4 flex flex-col justify-center items-center w-full bg-white rounded-lg shadow-md border h-60">
            <div className="flex items-center mb-3">
              <img src={provider.img} className="w-20 h-20 rounded-full mr-3" />
              <h3 className="font-black text-3xl text-blue-700">{provider.name}</h3>
            </div>
            <p className="text-2xl text-black font-bold">{provider.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;
