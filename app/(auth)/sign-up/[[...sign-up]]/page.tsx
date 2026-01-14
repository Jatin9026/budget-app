import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg p-8">
        <ClerkLoaded>
          <SignUp />
        </ClerkLoaded>
        <ClerkLoading>
          <div className="flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        </ClerkLoading>
      </div>
    </div>
  )
}