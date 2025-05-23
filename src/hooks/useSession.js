import { useSelector } from "react-redux";

function useSession() {
  const user = useSelector((reducer) => reducer.auth.user);

  return { user };
}

export default useSession;
