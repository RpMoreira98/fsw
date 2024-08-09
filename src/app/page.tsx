"use client";

import { SearchIcon } from "lucide-react";
import { Header } from "./_components/hearder";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./lib/prisma";
import { BarberShopItem } from "./_components/barbershop-item";
import { quickSearchOption } from "./_constants/search";
import { Agendamento } from "./_components/agendamento";

// eslint-disable-next-line @next/next/no-async-client-component
const Home = async () => {
  const barberShop = await db.barbershop.findMany({});
  const popularesBarberShop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rodrigo!</h2>
        <p>Quarta-Feira, 5 de agosto</p>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." className="rounded-xl" />
          <Button className="rounded-xl">
            <SearchIcon />
          </Button>
        </div>
        <div className="flex gap-3 mt-5 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map((option) => (
            <Button
              className="gap-2 rounded-[5px]"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                alt="cabelo"
                width={16}
                height={16}
              ></Image>
              {option.title}
            </Button>
          ))}
        </div>
        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner-01.png"
            alt={""}
            fill
            className="object-cover rounded-xl"
          ></Image>
        </div>
        <Agendamento />
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-2">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShop.map((barberShop) => (
            <BarberShopItem barbershop={barberShop} key={barberShop.id} />
          ))}
        </div>
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-2">
          Populares
        </h2>
        <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularesBarberShop.map((barberShop) => (
            <BarberShopItem barbershop={barberShop} key={barberShop.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
