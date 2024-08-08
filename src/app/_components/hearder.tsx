import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <Card>
      <CardContent className="justify-between items-center flex flex-row p-5">
        <Image src="/logo.png" alt={""} height={18} width={120}></Image>
        <Button size="icon" variant="outline" onClick={openMenu}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};
