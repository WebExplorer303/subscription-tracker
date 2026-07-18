'use client'

import Link from 'next/link'
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
return(
<div className = "min-h-screen flex items-center justify-center bg-[#0d1117]">
            <SignUp />
</div>
)
}