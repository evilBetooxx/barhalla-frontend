import EditProf from "@/components/profileUser/editProf";
import withAuth from "@/hocs/withAuth";

function editProfilePage() {
  return (
    <div>
      <EditProf />
    </div>
  );
}

export default withAuth(editProfilePage);