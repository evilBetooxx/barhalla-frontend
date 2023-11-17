import AddBarber from "@/components/barberShops/addBarber";
import withAuth from "@/hocs/withAuth";

function registerBarberPage() {
  return (
    <div>
      <AddBarber />
    </div>
  );
}

export default withAuth(registerBarberPage);