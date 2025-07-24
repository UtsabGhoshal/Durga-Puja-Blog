import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoonMessage?: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  comingSoonMessage = "This section is being carefully crafted with authentic information and beautiful content. Please check back soon!" 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-festival-orange/10 rounded-full">
                  <Construction className="w-12 h-12 text-festival-orange" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                {title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-festival-orange/5 to-festival-saffron/5 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  {comingSoonMessage}
                </p>
              </div>
              
              <div className="text-sm text-gray-500">
                <p className="mb-4">
                  Want to see this content sooner? Feel free to continue prompting 
                  to help fill in this page with amazing Durga Puja content!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-festival-orange hover:bg-festival-orange-dark flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to Home
                  </Button>
                </Link>
                <Button variant="outline" className="border-festival-orange text-festival-orange hover:bg-festival-orange/5">
                  Notify When Ready
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
