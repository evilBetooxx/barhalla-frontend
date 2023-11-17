import ErrorBarber from'@/components/profileBarber/errorBarber';
import withAuth from "@/hocs/withAuth";

function errorBarberPage (){
    return(
        <div>
            <ErrorBarber />
        </div>
    )
}

export default withAuth(errorBarberPage);