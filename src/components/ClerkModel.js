"use client"

import { useUser, useAuth } from "@clerk/nextjs"
import { useEffect } from "react"

export function SyncUser() {
  const { getToken, isSignedIn } = useAuth()
  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn) return

      const token = await getToken()

      await fetch("http://localhost:3000/api/Clerk/sync", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    }

    syncUser()
  }, [isSignedIn])

  return null

}

export default function Dashboard() {
  const { user } = useUser()

  console.log(user?.id) // This is the Clerk user ID
}