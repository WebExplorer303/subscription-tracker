import SignUpPage from "@/components/sign-up";
import { ClerkProvider } from '@clerk/nextjs'


export default function SignUp() {
    return (
        <ClerkProvider>
            <SignUpPage />
        </ClerkProvider>
    )
}
