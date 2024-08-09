'use client'

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhonesItemProps {
  phones: string
}

export const PhoneComponent = ({phones}: PhonesItemProps) => {
  const handleclickcopy = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success('Telefone copiado com sucesso')
  }
  return (
    <div className="flex justify-between" key={phones}>
              <div className="flex items-center gap-2">
                <SmartphoneIcon/>
                <p>{phones}</p>
              </div>
              <div>
                <Button variant='outline' className="rounded-[5px]" onClick={() => handleclickcopy(phones)}>Copiar</Button>
              </div>
            </div>
  )
}