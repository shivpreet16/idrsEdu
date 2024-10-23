import Hero from "../components/Hero";
import KnowUs from "../components/KnowUs";
const Landing = () => {
  return (
    <div className="overflow-x-hidden">
        <section>           
            <Hero/>
        </section>
        <section>
            <KnowUs/>
        </section>
    </div>
  );
};

export default Landing;
