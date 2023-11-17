import MyBarber from "@/components/barberShops/myBarber"
import withAuth from "@/hocs/withAuth";

function barberPage (){
    return(
        <MyBarber/>
    )
}

export default withAuth(barberPage);