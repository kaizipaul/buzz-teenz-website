"use client";

import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
// import { toast, ToastContainer } from 'react-hot-toast'
import Login from '@/components/login/login'
import { Button } from "@/components/ui/button"
import { IoIosWarning } from "react-icons/io"
import { IoCheckmarkCircle } from "react-icons/io5"

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  // const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser(session.user)
        await checkAdminStatus(session.user)
      } else {
        setUser(null)
        setIsAdmin(false)
      }
      setLoading(false)
    }

    checkUser()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user)
          console.log(session.user);
          await checkAdminStatus(session.user)
        } else {
          setUser(null)
          setIsAdmin(false)
        }
      }
    )

    // return () => {
    //   authListener.unsubscribe()
    // }
  }, [])

  async function checkAdminStatus(user) {
    
    const userRole = user.role;
  
  
    if (userRole === "admin_role" || userRole === "superuser_role") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push('/admin')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="px-4">
        {user ? (
          <div className="flex justify-between items-center bg-[#1789FC] px-4 py-2 rounded-lg">
            <p className="flex gap-2 items-center">
              <IoCheckmarkCircle className="h-5 w-5" />
              {isAdmin ? 'Admin logged in' : 'Logged in as user'}
            </p>
            <Button className="bg-[#AB0758]" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div>
            <p className="flex gap-2 items-center p-4 bg-red-600 rounded-lg">
              <IoIosWarning className="h-5 w-5" />
              Log in as admin to access dashboard
            </p>
          </div>
        )}
      </div>
      {user && isAdmin ? children : <Login />}
    </>
  )
}
