"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoIosWarning } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { supabase } from "@/lib/supabaseClient";
import Login from "@/components/login/login";

export default function VoteLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // return () => {
    //     authListener.unsubscribe();
    // };
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="px-4">
        {user ? (
          <div className="flex justify-between items-center bg-[#1789FC] px-4 py-2 rounded-lg">
            <p className="flex gap-2 items-center">
              <IoCheckmarkCircle className="h-5 w-5" />
              Logged in
            </p>
            <Button className="bg-[#AB0758]" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div>
            <p className="flex gap-2 items-center p-4 bg-red-600 rounded-lg">
              <IoIosWarning className="h-5 w-5" />
              Log in to vote
            </p>
          </div>
        )}
      </div>
      {user ? children : <Login />}
    </>
  );
}
