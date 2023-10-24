import LoginForm from "@/components/auth/loginForm";
import SocialButtons from "@/components/auth/socialButtons";
import Rights from "@/components/auth/rights";
function loginPage (){
    return(
        <div>
            <LoginForm/>
            <SocialButtons/>
            <Rights/>
        </div>
    )
}
export default loginPage;