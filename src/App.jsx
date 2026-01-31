import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  Newspaper, 
  TrendingUp, 
  User, 
  Bell, 
  Settings,
  Search,
  LayoutDashboard,
  Shield,
  Activity
} from 'lucide-react';

const Card = ({ title, icon: Icon, children, borderColor }) => (
  <div className={`slds-card mb-6 border-t-4 ${borderColor}`}>
    <div className="slds-card-header">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-gray-500" />}
        <h2 className="text-sm font-bold uppercase tracking-wider">{title}</h2>
      </div>
      <button className="text-slds-blue text-xs font-semibold hover:underline">View All</button>
    </div>
    <div className="slds-card-body">
      {children}
    </div>
  </div>
);

const StatItem = ({ label, value, trend }) => (
  <div className="border-b border-gray-100 py-3 last:border-0">
    <div className="flex justify-between items-center">
      <span className="text-gray-600 text-sm">{label}</span>
      <div className="text-right">
        <span className="font-bold text-gray-800">{value}</span>
        {trend && (
          <span className={`ml-2 text-xs ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  </div>
);

const TavilyInsight = ({ query, results }) => (
  <div className="mt-4 border-t border-gray-100 pt-4">
    <div className="flex items-center gap-2 mb-3">
      <div className="bg-blue-100 p-1 rounded">
        <Search className="w-3 h-3 text-blue-600" />
      </div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tavily Live Intelligence: "{query}"</p>
    </div>
    <div className="space-y-3">
      {results.map((res, i) => (
        <div key={i} className="text-xs">
          <a href="#" className="text-slds-blue font-semibold hover:underline block mb-0.5">{res.title}</a>
          <p className="text-gray-500 line-clamp-2">{res.snippet}</p>
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Header */}
      <header className="bg-slds-blue text-white h-12 flex items-center justify-between px-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-1 rounded cursor-pointer">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <h1 className="font-bold tracking-tight">MISSION CONTROL</h1>
          <nav className="hidden md:flex gap-4 ml-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white pb-1">Dashboard</a>
            <a href="#" className="opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white pb-1">Tactics</a>
            <a href="#" className="opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white pb-1">Analytics</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-300" />
            <input 
              type="text" 
              placeholder="Search Badri's Universe..." 
              className="bg-white/10 border-0 rounded-full py-1 pl-8 pr-4 text-xs w-64 focus:ring-1 focus:ring-white outline-none placeholder-white/50"
            />
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
            <Settings className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
            <div className="bg-white rounded-full p-0.5 ml-2">
              <User className="w-6 h-6 text-slds-blue" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-gray-500 text-sm font-medium">Monday, {time.toLocaleDateString()}</p>
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back, Badri</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slds-gray-2 flex items-center gap-4">
            <div className="text-right border-r pr-4 border-gray-100">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest leading-tight">System Status</p>
              <p className="text-sm font-bold text-green-600">OPERATIONAL</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest leading-tight">Local Time</p>
              <p className="text-sm font-bold font-mono text-gray-700">{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: FC Barcelona */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-2 text-barca-blue">
              <Shield className="w-6 h-6" />
              <h3 className="text-lg font-bold">Blaugrana Command Center</h3>
            </div>

            <Card title="Match Pulse" icon={Activity} borderColor="border-barca-red">
              <div className="bg-barca-blue/5 p-4 rounded-lg mb-4 text-center">
                <p className="text-xs font-bold text-barca-blue uppercase mb-2">Upcoming Match - La Liga</p>
                <div className="flex justify-around items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-1"></div>
                    <p className="text-sm font-bold">Barça</p>
                  </div>
                  <div className="text-2xl font-black text-gray-300 italic">VS</div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-1"></div>
                    <p className="text-sm font-bold">R. Madrid</p>
                  </div>
                </div>
                <div className="mt-4 text-xs font-semibold bg-barca-red text-white inline-block px-3 py-1 rounded-full">
                  Sunday, 21:00 CET
                </div>
              </div>

              <StatItem label="League Position" value="1st" trend={0} />
              <StatItem label="Win Probability" value="68%" trend={2.4} />
              <StatItem label="Injured Starters" value="2" trend={-1} />
            </Card>

            <Card title="Camp Nou Intel" icon={Newspaper} borderColor="border-barca-blue">
              <div className="space-y-4">
                {[
                  "La Masia prospect called up for first team training.",
                  "New sponsorship deal set to boost summer transfer budget.",
                  "Hansi Flick confirms injury updates ahead of El Clásico."
                ].map((news, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                    <div className="min-w-[4px] bg-barca-red rounded-full group-hover:bg-barca-blue transition-colors"></div>
                    <p className="text-sm text-gray-700 hover:text-slds-blue">{news}</p>
                  </div>
                ))}
              </div>
              
              <TavilyInsight 
                query="FC Barcelona latest transfer news"
                results={[
                  { title: "Barça monitoring Swedish sensation", snippet: "Reports suggest deco has been spotted in Stockholm scouting a 17-year-old midfielder..." },
                  { title: "Financial Fair Play Update", snippet: "La Liga's revised salary cap provides more room for registration of winter signings..." }
                ]}
              />
            </Card>
          </div>

          {/* Right Column: CSK */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-2 text-yellow-600">
              <Trophy className="w-6 h-6" />
              <h3 className="text-lg font-bold">Whistle Podu Analytics</h3>
            </div>

            <Card title="Yellow Army Status" icon={TrendingUp} borderColor="border-csk-yellow">
               <div className="bg-yellow-50 p-4 rounded-lg mb-4 flex justify-between items-center border border-yellow-100">
                <div>
                  <p className="text-xs font-bold text-yellow-700 uppercase">Current Standing</p>
                  <p className="text-3xl font-black text-yellow-600">RANK #2</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-yellow-700 uppercase">Points Table</p>
                  <p className="text-sm font-bold text-gray-600">14 Matches | 9 Wins</p>
                </div>
              </div>

              <StatItem label="Net Run Rate" value="+0.742" trend={0.12} />
              <StatItem label="Fan Engagement" value="High" trend={5.8} />
              <StatItem label="Thala Status" value="Active" />
            </Card>

            <Card title="Strategic Roadmap" icon={Calendar} borderColor="border-csk-blue">
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded border-l-4 border-csk-blue">
                  <p className="text-xs font-bold text-gray-500 uppercase">Season Strategy</p>
                  <p className="text-sm font-semibold">Optimization of middle-order stability in death overs.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded border-l-4 border-csk-yellow">
                  <p className="text-xs font-bold text-gray-500 uppercase">Player Spotlight</p>
                  <p className="text-sm font-semibold">Ruturaj Gaikwad leading the Orange Cap race.</p>
                </div>
              </div>

              <TavilyInsight 
                query="CSK player auction strategy 2025"
                results={[
                  { title: "Fleming hints at core retention", snippet: "Head coach Stephen Fleming emphasizes the importance of 'CSK DNA' in upcoming mega auction..." },
                  { title: "Chepauk Stadium Renovations", snippet: "The home ground is receiving upgraded drainage systems ahead of the monsoon season..." }
                ]}
              />
            </Card>

            <div className="slds-card p-4 bg-gradient-to-r from-csk-yellow/20 to-barca-red/10 border-none">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-6 h-6 text-slds-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Cross-Sport Insight</h4>
                  <p className="text-xs text-gray-600">Both clubs showing 90%+ home win ratios this month.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer / Utility Bar */}
      <footer className="bg-white border-t border-slds-gray-2 py-3 px-6 text-[10px] text-gray-400 flex justify-between items-center">
        <div>© 2024 CLAWDBOT MISSION CONTROL | DEVELOPED FOR BADRI</div>
        <div className="flex gap-4 uppercase font-bold tracking-widest">
          <span className="text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Sync Active
          </span>
          <span className="cursor-pointer hover:text-slds-blue">Privacy</span>
          <span className="cursor-pointer hover:text-slds-blue">Terms</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
