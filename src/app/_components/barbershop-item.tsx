import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarberShop {
  barbershop: Barbershop;
}

export const BarberShopItem = ({ barbershop }: BarberShop) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="object-cover rounded-2xl"
            alt=""
            src={barbershop.imageUrl}
          ></Image>

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs font-semibold">5,0</span>
          </Badge>
        </div>

        <div className="py-3 px-1">
          <h3 className="font-semibold truncate">{barbershop.name}</h3>
          <p className="text-sm truncate text-gray-400">{barbershop.address}</p>
          <Button
            variant="secondary"
            className="mt-3 w-full rounded-[5px]"
            asChild
          >
            <Link href={`/barbershop/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
