import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarberPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarberPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      <div className="relative w-full h-[250px]">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          alt={barbershop?.name}
        ></Image>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4 rounded-[5px]"
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-[5px]"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="p-5 flex flex-col gap-2 border-b border-solid">
        <h1 className="font-bold text-xl">{barbershop?.name}</h1>
        <div className="flex space-x-1 items-center">
          <MapPinIcon size={12} className="fill-primary text-primary" />
          <p>{barbershop?.address}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <StarIcon size={12} className="fill-primary text-primary" />
          <span>5.0</span>
          <p>{`(880 avaliações)`}</p>
        </div>
      </div>
      <div className="p-5 flex flex-col border-b border-solid">
        <h2 className=" text-gray-400 font-bold uppercase">Sobre nós</h2>
        <p className="mt-5 font-medium text-sm text-left">
          {barbershop?.description}
        </p>
      </div>
    </div>
  );
};

export default BarbershopPage;
