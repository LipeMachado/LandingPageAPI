import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[600px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] left-20 -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg">Api Performatica</CardTitle>
          </div>
        </CardHeader>

        <CardContent>Transforme seu cassino com a Api Performatica!</CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] right-[100px] bottom-[90px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div>
            <CardTitle>Integração Simples com Nossa API</CardTitle>
            <CardDescription className="text-md mt-2">
              Simplifique seu processo de integração com nossa API.
              Oferecemos uma solução fácil e flexível para aprimorar
              a experiência de jogo em seu cassino online.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
