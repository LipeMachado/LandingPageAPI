import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";
import { JSX } from "react/jsx-runtime";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Acessibilidade",
    description:
      "Oferecemos uma experiência inclusiva para todos os jogadores, independentemente de suas habilidades ou necessidades especiais.",
  },
  {
    icon: <MapIcon />,
    title: "Desempenho",
    description:
      "Garantimos um cassino online rápido, responsivo e eficiente, proporcionando uma experiência de jogo fluida e sem interrupções.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidade",
    description:
      "Nossa solução é altamente escalável, permitindo que sua plataforma cresça sem problemas à medida que conquista novos jogadores e expande seu alcance.",
  },
  {
    icon: <GiftIcon />,
    title: "Segurança Avançada",
    description:
      "Garantimos a segurança avançada do seu cassino online, protegendo dados e privacidade para uma experiência de jogo confiável.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Guia{" "}
        passo a passo{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          de como funciona
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section >
  );
};
