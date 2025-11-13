import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  BarChart3, 
  Settings, 
  TrendingUp,
  Activity,
  Clock,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Learning Hours", value: "24.5", icon: Clock, change: "+12%" },
    { label: "Topics Mastered", value: "18", icon: Target, change: "+3" },
    { label: "Progress Rate", value: "87%", icon: TrendingUp, change: "+5%" },
    { label: "Achievements", value: "12", icon: Award, change: "+2" },
  ];

  const recentActivity = [
    { title: "Quantum Physics Basics", time: "2 hours ago", progress: 85 },
    { title: "Machine Learning Intro", time: "5 hours ago", progress: 60 },
    { title: "Data Structures", time: "1 day ago", progress: 100 },
    { title: "Web Development", time: "2 days ago", progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />
      
      <div className="pt-24 px-4 pb-12">
        <div className="container mx-auto max-w-7xl">
          {/* Sidebar & Main Content */}
          <div className="grid lg:grid-cols-[250px_1fr] gap-6">
            {/* Sidebar */}
            <aside className="space-y-2">
              <Card className="glass p-4">
                <nav className="space-y-1">
                  <Link to="/dashboard">
                    <Button variant="ghost" className="w-full justify-start glass-strong">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Insights
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="ghost" className="w-full justify-start hover:glass">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="ghost" className="w-full justify-start hover:glass">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </nav>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="space-y-6">
              {/* Header */}
              <div className="glass p-6 rounded-2xl">
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, <span className="gradient-text">Learner</span>
                </h1>
                <p className="text-muted-foreground">
                  Here's your learning progress overview
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="glass p-5 hover:glow transition-smooth">
                      <div className="flex items-start justify-between mb-3">
                        <div className="gradient-primary p-2 rounded-xl">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-primary">
                          {stat.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  );
                })}
              </div>

              {/* Charts Section */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Progress Chart */}
                <Card className="glass p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Weekly Progress</h2>
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                      const height = Math.random() * 60 + 40;
                      return (
                        <div key={day} className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground w-8">{day}</span>
                          <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                            <div 
                              className="h-full gradient-primary rounded-full transition-smooth"
                              style={{ width: `${height}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">
                            {Math.round(height)}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                {/* Activity Feed */}
                <Card className="glass p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Recent Activity</h2>
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="glass-strong p-4 rounded-xl hover:glow transition-smooth cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium">{activity.title}</h3>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                              style={{ width: `${activity.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">{activity.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
