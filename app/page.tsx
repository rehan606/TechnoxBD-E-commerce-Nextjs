import { Button } from "@/components/ui/button";

const Home = () => {
  return <div >

    <div className="bg-darkBg ">
      <div className=" h-10 container mx-auto flex items-center">
        <h2 className=" text-white items-center"> TechnoxBD</h2>
        <Button variant="destructive">Click Me</Button>
      </div>
    </div>
  </div>
};

export default Home;