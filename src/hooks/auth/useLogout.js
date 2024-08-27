import { useNavigate } from "react-router";
import { AppRoutes } from "../../constants/routes";
import { USER_INFO_KEY } from "../../constants/keyUser";

export const useLogout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handlelogOut = () => {
    window.localStorage.removeItem(USER_INFO_KEY);
    navigate(AppRoutes.LOGIN, { replace: true });
  };

  return {
    handlelogOut,
  };
};
