import User from "../components/profileUser/user";
import Reviews from "../components/profileUser/Reviews";
import withAuth from "@/hocs/withAuth";

function profilePage() {
  return (
    <div>
      <User/>
        <Reviews/>
    </div>
  );
}

export default withAuth(profilePage);