import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface Services {
  barbershop: BarbershopService
}

export const ServiceItem = ({barbershop}: Services) => {
  return (
    <Card className="rounded-xl flex flex-row">
      <CardContent className="flex items-center gap-3 p-3">
    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
      <Image src={barbershop.imageUrl} alt={""} fill className="rounded-xl object-cover"></Image>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-sm">{barbershop.name}</h3>
      <p className="text-sm text-gray-400">{barbershop.description}</p>

      <div className="flex items-center justify-between">
      <p className="font-bold text-sm text-primary">{Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
      }).format(Number(barbershop.price))}</p>
      <Button variant='secondary' className="rounded-[5px]" size='sm'>
        Reservar
      </Button>
    </div>
    </div>
      </CardContent>
    </Card>
  )
}