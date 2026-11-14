
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am Chloe Joy P. Pereyra, 19 years old. Currently studying at Naga College Foundation. 
            A 2nd year student taking up Bachelor of Science in Information Technology. 
          </p>

          <p>
            I consider myself a curious and creative person who enjoys learning and discovering new things. 
            I may not have everything figured out yet, but I believe that every experience gives me an opportunity to grow. 
            As I continue my journey as a student, I hope to develop not only my knowledge and abilities but 
            also a better understanding of myself and what I can become.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Learning Journey</CardTitle>
           <p className="text-sm text-muted-foreground">
            I'm currently learning and exploring different technologies as part of my journey as an IT student. 
        
           </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}