import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

function withAuth(Component) {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user]);

    return <Component {...props} />;
  };
}

export default withAuth;
