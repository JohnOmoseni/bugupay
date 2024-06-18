import { MdKeyboardArrowDown } from "react-icons/md";
import { setShowDrawer } from "@redux/features/dashboardStateSlice";
import { setUser, setToken } from "@redux/features/userSlice";
import Search from "./Search";

const NavbarButton = ({
  title,
  customFunc,
  icon,
  isDot,
  dotColor = "blue",
}) => (
  <TooltipWrapper title={title}>
    <button
      type="button"
      className="icon icon hover:bg-br-light relative h-8 w-8 rounded-full text-xl transition-colors"
      onClick={customFunc}
    >
      {isDot && (
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute right-2 top-1 inline-flex h-2 w-2 rounded-full"
        />
      )}
      {icon}
    </button>
  </TooltipWrapper>
);

function Navbar({ headerRef }) {
  const { showDrawer, activePane } = useSelector(
    (state) => state.dashboardState,
  );
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      dispatch(setUser({}));
      dispatch(setToken(""));
      sessionStorage.removeItem("melody-auth-token");
      navigate("/auth/sign-in");
    }
  };

  return (
    <div
      ref={headerRef}
      className="bg-body relative z-[999] w-full flex-row !justify-between gap-4 px-4 py-4 sm:gap-8 sm:px-6"
    >
      <div className="flex-row gap-3 font-semibold">
        <NavbarButton
          title="Menu"
          customFunc={() => dispatch(setShowDrawer(!showDrawer))}
          icon={<MenuIcon />}
        />

        <span className="capitalize leading-5">
          {activePane ?? "Dashboard"}
        </span>
      </div>

      <Search className="hidden sm:block" />

      <div className="flex-row gap-3">
        <Link to="/dashboard/profile" className="flex-row gap-2">
          <div className="border-br-dashboard h-8 w-8 cursor-pointer overflow-hidden rounded-full border border-solid p-1">
            <img src={avatar} alt="" className="transition" />
          </div>
          <p className="flex-row !justify-start gap-2">
            <span className="text-base text-gray-400">Hi,</span>{" "}
            <span className="mt-0.5 block truncate text-xs font-bold capitalize text-gray-200">
              {user?.business_name ?? user?.firstname ?? "Unknown"}
            </span>
          </p>
        </Link>
        <Dropdown
          list={["Logout"]}
          menuBtn={() => (
            <span className="icon">
              <MdKeyboardArrowDown size={16} className="text-gray-400" />
            </span>
          )}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
export default Navbar;
