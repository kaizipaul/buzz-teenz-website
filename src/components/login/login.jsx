import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
      // Handle successful login here (e.g., redirect to a dashboard)
    }
  };

  return (
    <div className="h-[500px] flex flex-col gap-4 p-4 items-center">
      <Tabs defaultValue="email" className="w-[100%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">With Email</TabsTrigger>
          <TabsTrigger value="passwordless">Passwordless</TabsTrigger>
        </TabsList>
        <TabsContent value="email" className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Log in with Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-300"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-300"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin}>Log in</Button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="passwordless">
          Change your password here.
        </TabsContent>
      </Tabs>
      <p>
        New User?
        <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
