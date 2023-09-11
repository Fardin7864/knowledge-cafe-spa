import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="border-b-2 border-gray-400">
      <div className="flex justify-between mt-12 mb-8">
        <h1 className="font-[#111] text-4xl font-bold leading-[64px]">
          Knowledge Cage
        </h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
