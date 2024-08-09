"use client"
import { Button } from "@/app/_components/ui/button"
import { Barbershop } from "@prisma/client"
import { ChevronLeft, MenuIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Props {
  barbershop: Barbershop
}

export const BarberPage = ({barbershop}:Props) => {
  const router = useRouter()
  return (
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
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 rounded-[5px]">
            <ChevronLeft />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-[5px]"
        >
          <MenuIcon />
        </Button>
      </div>
  )
}