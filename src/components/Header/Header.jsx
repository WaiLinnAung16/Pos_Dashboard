import { useDisclosure } from "@mantine/hooks";

// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useLogoutMutation } from "../redux/api/contact";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../redux/services/authSlice";
// import Cookies from "js-cookie";

// import logoDark from "../assets/logo-dark.png";
// import logoWhite from "../assets/logo-white.png";
import bell from "../../../public/BellRinging.svg";
import moonStar from "../../../public/MoonStars.svg";
import userCircle from "../../../public/UserCircle.svg";

const Header = () => {
  const [openedDrawer, { open, close }] = useDisclosure(false);
  // const [logout] = useLogoutMutation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const token = Cookies.get("token");
  // const user = JSON.parse(Cookies.get("user"));

  // const logoutHandler = async () => {
  //   const { data } = await logout(token);
  //   dispatch(removeUser());
  //   console.log(data);
  //   if (data?.success) {
  //     navigate("/login");
  //   }
  // };

  return (
    <>
      <nav className=" py-[17px] px-8 sticky z-50 bg-[#202124] border-[#3F4245] border-b-[2px] top-0">
        <div className=" flex items-center gap-5  justify-end">
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
      </nav>
    </>
  );
};

export default Header;
