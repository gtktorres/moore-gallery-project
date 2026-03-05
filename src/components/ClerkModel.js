"use client"

import { useUser } from "@clerk/nextjs"

export default function Dashboard() {
  const { user } = useUser()

  console.log(user?.id) // This is the Clerk user ID
}