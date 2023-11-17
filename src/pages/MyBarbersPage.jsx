import MyBarberShops from '@/components/profileBarber/myBarberShops';
import withAuth from "@/hocs/withAuth";

function myBarberShopsPage (){
    return(
        <div>
            <MyBarberShops />
        </div>
    )
}

export default withAuth(myBarberShopsPage);