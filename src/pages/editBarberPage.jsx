import EditBarberShop from "@/components/profileBarber/editBarberShop";
import withAuth from "@/hocs/withAuth";

function editBarberPage() {
  return (
    <div>
      <EditBarberShop />
    </div>
  );
}

export default withAuth(editBarberPage);