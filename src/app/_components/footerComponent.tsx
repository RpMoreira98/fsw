import { Card, CardContent } from "./ui/card"

export const FooterComponent = () => {
  return (
    <footer>
        <Card>
          <CardContent className="flex items-center p-5">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
  )
}