import Navbar from "../Components/Navbar";

function WorkProgress() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="h-screen w-full flex justify-center items-center text-center myContainer text-gray-200">
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-2xl pb-3 font-extrabold">
            Work in progress...
          </h1>
          <p className="text-lg font-medium">
            Please come back after some time.. Thanks!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkProgress;
