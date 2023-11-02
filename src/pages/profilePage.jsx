import User from "../components/profileUser/user";
import Reviews from "../components/profileUser/Reviews";

function profilePage() {
  return (
    <div>
      <User/>
        <Reviews/>
    </div>
  );
}

export default profilePage;