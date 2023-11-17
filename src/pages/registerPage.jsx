import RegisterForm from "@/components/auth/registerForm";
import SocialButtons from "@/components/auth/socialButtons";
import Rights from "@/components/auth/rights";

function registerPage() {
        return (
            <div>
                <RegisterForm/>
                <SocialButtons />
                <Rights/>
            </div>
    )
}

export default registerPage;