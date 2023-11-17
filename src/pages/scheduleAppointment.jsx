import CreAppointment from "@/components/appointments/creAppointment";
import withAuth from "@/hocs/withAuth";

function scheduleAppointment (){
    return(
        <CreAppointment/>
    )
}

export default withAuth(scheduleAppointment);