import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Brain,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Target,
  Users,
  TrendingUp,
  Database,
  PenTool
} from "lucide-react";

export default function DynarisLanding() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Advanced AI agents that learn, adapt, and execute complex tasks with human-level understanding"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Seamless integration of AI workers into your existing processes and systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Real-time monitoring and optimization of your digital workforce productivity"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with full compliance and data protection standards"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "Round-the-clock digital workers that never need breaks or time off"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "AI agents focused on achieving specific business outcomes and KPIs"
    }
  ];

  const useCases = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Support",
      description: "AI agents handle 90% of customer inquiries with human-level empathy",
      metrics: "Response time: <30s | Resolution rate: 94%"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales & Lead Generation",
      description: "Intelligent prospecting and qualification of leads at scale",
      metrics: "Lead quality: +40% | Conversion rate: +25%"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing",
      description: "Automated analysis and insights from complex business data",
      metrics: "Processing speed: 100x faster | Accuracy: 99.8%"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Creation",
      description: "Generate marketing materials, reports, and communications",
      metrics: "Content output: +300% | Quality score: 9.2/10"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc",
      content: "Dynaris AI transformed our operations. Our digital workforce handles complex tasks that would take our team weeks to complete.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Logistics Co",
      content: "The AI agents integrate seamlessly with our systems. We've seen 60% improvement in efficiency across all departments.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Head of Customer Success",
      company: "ServicePro",
      content: "Our customer satisfaction scores improved dramatically. The AI agents provide consistent, high-quality support 24/7.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ backgroundColor: '#f8fafc' }}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Dynaris AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="https://app.dynaris.ai" className="text-gray-600 hover:text-blue-600 transition-colors">App</a>
              <Button variant="outline" className="mr-2 rounded-md" asChild>
                <a href="https://app.dynaris.ai">Sign In</a>
              </Button>
              <Button className="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-md" asChild>
                <a href="https://app.dynaris.ai">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
        {/* Background Elements - Optimized for performance */}
        <div className="absolute inset-0">
          {/* Primary gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-25 to-blue-50"></div>

          {/* Simplified pattern overlay - reduced complexity */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800">
            Revolutionary AI Technology
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Enterprise AI Workforces</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Architect multiple workflows and stable deployment instances which perform work 24/7.
            Deploy specialized AI agents in unified coordination to automate operations and deliver measurable business outcomes.
          </p>
          {/* Neural Processing Architecture - Optimized for performance */}
          <div className="flex justify-center mb-12">
            <div className="relative w-96 h-60">
              {/* Neural Node Network - Simplified for better performance */}

              {/* Left Hemisphere Nodes - Reduced to 3 nodes */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full opacity-90"></div>
              </div>
              <div className="absolute top-20 left-20 w-10 h-10 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-2" style={{ animationDelay: '0.5s' }}>
                <div className="w-4 h-4 bg-purple-500 rounded-full opacity-90"></div>
              </div>
              <div className="absolute bottom-16 left-16 w-10 h-10 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-3" style={{ animationDelay: '1s' }}>
                <div className="w-4 h-4 bg-cyan-500 rounded-full opacity-90"></div>
              </div>

              {/* Right Hemisphere Nodes - Reduced to 3 nodes */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-1" style={{ animationDelay: '1.5s' }}>
                <div className="w-6 h-6 bg-orange-500 rounded-full opacity-90"></div>
              </div>
              <div className="absolute top-20 right-20 w-10 h-10 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-2" style={{ animationDelay: '2s' }}>
                <div className="w-4 h-4 bg-pink-500 rounded-full opacity-90"></div>
              </div>
              <div className="absolute bottom-16 right-16 w-10 h-10 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-3" style={{ animationDelay: '2.5s' }}>
                <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-90"></div>
              </div>

              {/* Central Processing Unit - Simplified */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm opacity-90 animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Center Node */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-100 border border-slate-300 rounded-full flex items-center justify-center shadow-sm animate-gentle-drift-1" style={{ animationDelay: '3s' }}>
                <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-90"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10x</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI agents engineered with enterprise-grade machine learning to deliver
              consistent, scalable business outcomes that exceed traditional operational benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform mx-auto shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mission-Critical Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven enterprise implementations across key business functions, delivering quantifiable
              operational improvements and competitive advantages at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {useCase.metrics}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations worldwide are transforming their operations with Dynaris AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Dynaris AI</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with intelligent digital workforces that deliver exceptional results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="https://app.dynaris.ai" className="hover:text-white transition-colors">App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@dynaris.ai" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dynaris AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}