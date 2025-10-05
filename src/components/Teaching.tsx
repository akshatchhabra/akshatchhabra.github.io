import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Video, Award } from "lucide-react";

const teachingActivities = [
  {
    title: "Online Courses",
    icon: Video,
    description: "Created and taught comprehensive courses on web development.",
    details: ["3 courses published", "5,000+ students enrolled", "4.8 average rating"],
  },
  {
    title: "Workshop Instructor",
    icon: Users,
    description: "Conducted hands-on workshops on modern JavaScript frameworks.",
    details: ["20+ workshops", "500+ participants", "Topics: React, Node.js, TypeScript"],
  },
  {
    title: "Technical Mentoring",
    icon: Award,
    description: "Mentored aspiring developers through career transitions.",
    details: ["15 mentees", "Career guidance", "Code reviews & pair programming"],
  },
  {
    title: "Content Creation",
    icon: BookOpen,
    description: "Writing tutorials and articles on web development topics.",
    details: ["50+ blog posts", "Tech tutorials", "Best practices guides"],
  },
];

const Teaching = () => {
  return (
    <section id="teaching" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Teaching</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachingActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
