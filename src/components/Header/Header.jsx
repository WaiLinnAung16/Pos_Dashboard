import bell from "../../../public/BellRinging.svg";
import moonStar from "../../../public/MoonStars.svg";
import userCircle from "../../../public/UserCircle.svg";

const Header = () => {
  return (
    <>
      <nav className=" py-[17px] px-8 sticky z-50 bg-[#202124] border-[#3F4245] border-b-[1px] top-0">
        <div className=" flex items-center justify-end">
          <div className=" flex items-center gap-3">
            <div>
              <img src={bell} alt="" />
            </div>
            <div>
              <img src={moonStar} alt="" />
            </div>
            <div>
              <img src={userCircle} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
