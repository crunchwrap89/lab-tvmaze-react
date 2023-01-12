import HomeLink from '../Navigation/HomeLink';

function ShowNotFound() {
  return (
    <div className="w-full h-full bg-orange-300 flex flex-col justify-center items-center">
      <div className="bg-purple-600 rounded p-10 m-4">
        <h1 className="font-bold text-md">Oops!</h1>
        <p className="text-white text-md">
          It seems you are trying to locate an ID that does not exist in the TV Maze DB.
        </p>
      </div>
      <HomeLink />
    </div>
  );
}

export default ShowNotFound;
