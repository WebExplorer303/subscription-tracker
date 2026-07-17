import SignInPage from '@/components/sign-in'
import { ClerkProvider} from '@clerk/nextjs'

export default function SignIn() {
  return
          <ClerkProvider>
              <SignInPage />
          </ClerkProvider>
}