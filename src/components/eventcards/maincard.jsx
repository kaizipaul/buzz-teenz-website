import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function MainCard({name, location, date, tag}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Details</Button>
      </CardFooter>
    </Card>
  )
}
