
const Roadmap = () => {

  const steps = [
    { title: "Browse Skills", description: "Explore local skills and find what you want to learn." },
    { title: "Connect with Providers", description: "Message or book sessions with local skill providers." },
    { title: "Learn & Trade", description: "Learn new skills or trade your expertise with others." }
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 text-black">How It Works</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <div className="bg-white p-6 rounded-xl shadow-lg w-64">
            <h3 className="text-xl text-black font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
