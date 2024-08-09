'use client'
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";


export const Header = () => {
  return (
    <Card>
      <CardContent className="justify-between items-center flex flex-row p-5">
        <Image src="/logo.png" alt={""} height={18} width={120}></Image>
       <Sheet>
        <SheetTrigger>
        <Button size="icon" variant="outline" className="rounded-[5px]" onClick={() => alert('Abriu')}>
          <MenuIcon />
        </Button>
        </SheetTrigger>
        <SheetContent></SheetContent>
       </Sheet>
      </CardContent>
    </Card>
  );
};
