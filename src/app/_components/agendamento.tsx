import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export const Agendamento = () => {
  return (
    <>
      <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-2">
        Agendamentos
      </h2>
      <Card className="rounded-xl">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-3 py-5 pl-5">
            <Badge>Confirmado</Badge>
            <h3>Corte de cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://img.freepik.com/fotos-gratis/designer-trabalhando-no-modelo-3d_23-2149371896.jpg"></AvatarImage>
              </Avatar>
              <p className="text-sm">Barberia FSW</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-5 gap-3 border-l-2 border-solid">
            <h1>Agosto</h1>
            <p>07</p>
            <p>9:45</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
