
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookHeartIcon, BookOpen, CircleLetterZ, ClapperboardIcon, LucideSquareLetterZ, MicVocal, MoonStar, PencilSparklesIcon, SquareLetterP, TreeDeciduous, TreesIcon, WatchIcon } from "lucide-react";

const hobbies = [
  {
    title: "Reading",
    icon: BookHeartIcon,
    description: "I love reading in my free time.",
  },
  {
    title: "Writing",
    icon: PencilSparklesIcon,
    description: "I also write for myself. to relieve stress, write what i cannot say, and convey ideas that has been stuck in my mind.",
  },
  {
    title: "Sleeping",
    icon: MoonStar,
    description: "I love sleeping. anytime & anywhere.",
  },
  {
    title: "Strolling",
    icon: TreesIcon,
    description: "I rarely go out with friends but when I do, I really enjoy the time we spend.",
  },
  {
    title: "Watching",
    icon: ClapperboardIcon,
    description: "Watching korean dramas, Thai series, or simply tiktok videos make me feel relaxed.",
  },
  {
    title: "Singing",
    icon: MicVocal,
    description: "I enjoy singing and listening to music every single day.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Hobbies & Interests
        </h1>
        <p className="text-muted-foreground mt-1">
          What I enjoy doing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card
              key={hobby.title}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">
                    {hobby.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
