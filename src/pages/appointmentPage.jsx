import AppointmentHistory from "@/components/appointments/appointmentHistory";
import withAuth from "@/hocs/withAuth";

function appointmentPage() {
  return (
    <div>
      <AppointmentHistory />
    </div>
  );
}

export default withAuth(appointmentPage);