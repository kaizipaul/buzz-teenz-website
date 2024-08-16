
'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"

import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";



const SignUp = () => {
 const router = useRouter();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleLogin = async () => {
     const { error } = await supabase.auth.signUp({ email, password });
     if (error) {
         setError(error.message);
     } else {
         setError('');
         // Handle successful login here (e.g., redirect to a dashboard)
     }
     router.push('/vote')
 };

 return (
     <div className="h-[500px] flex flex-col gap-4 p-4 items-center justify-center">
         <Tabs defaultValue="email" className="w-[100%]">
           <TabsList className="grid w-full grid-cols-2">
             <TabsTrigger value="email">With Email</TabsTrigger>
             <TabsTrigger value="passwordless">Passwordless</TabsTrigger>
           </TabsList>
           <TabsContent value="email" className="flex flex-col gap-4">
            <Card>
             <CardHeader>
              <CardTitle>Sign Up with Email</CardTitle>
             </CardHeader>
             <CardContent className='space-y-2'>
             <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
           <Input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
           />
             </CardContent>
             <CardFooter>
             <Button onClick={handleLogin}>Sign Up</Button>
             {error && <p style={{ color: 'red' }}>{error}</p>}
             </CardFooter>
            </Card>
           </TabsContent>
           <TabsContent value="passwordless">Change your password here.</TabsContent>
           </Tabs>
           <p>
            Already have an account? 
            <Link href='/vote'>
            Log In
            </Link>
           </p>
     </div>
 );
};

export default SignUp;