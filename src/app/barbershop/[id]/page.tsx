import { db } from "@/app/lib/prisma";
import {  MapPinIcon, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { BarberPage } from "./barberpage";
import { ServiceItem } from "@/app/_components/servicesItem";

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
    include: {
      services: true
    }
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      <BarberPage barbershop={barbershop}/> 
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
      <div className="p-5">
      <div className="space-y-4">
        <h2 className=" text-gray-400 font-bold uppercase mb-3">SERVIÇOS</h2>
        {barbershop.services.map(services => <ServiceItem key={services.id} barbershop={services}/>)}
        </div>
      </div>
    </div>
  );
};

export default BarbershopPage;
