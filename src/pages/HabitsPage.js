import { useState, useEffect } from 'react';
import { habitsAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Target,
  Flame,
  Trophy,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  SkipForward,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { format, parseISO, subDays, eachDayOfInterval } from 'date-fns';

export default function HabitsPage() {
  const [stats, setStats] = useState(null);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHabit, setSelectedHabit] = useState(null);

  useEffect(() => {
    fetchHabitData();
  }, []);

  const fetchHabitData = async () => {
    try {
      const [habitsRes, statsRes] = await Promise.all([
        habitsAPI.getAll(),
        habitsAPI.getStats()
      ]);
      setHabits(habitsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error('Failed to fetch habit data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Health': 'bg-green-500/10 text-green-600 border-green-500/20',
      'Work': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      'Learning': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      'Spiritual': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      'Finance': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      'Relationships': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
      'Custom': 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    };
    return colors[category] || colors['Custom'];
  };

  const getStreakEmoji = (streak) => {
    if (streak >= 30) return '🏆';
    if (streak >= 14) return '🔥';
    if (streak >= 7) return '⭐';
    if (streak >= 3) return '✨';
    return '🌱';
  };

  const getDifficultyStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
  };

  // Generate calendar data for last 30 days
  const generateCalendarData = () => {
    if (!stats?.daily_data) return [];
    
    const today = new Date();
    const thirtyDaysAgo = subDays(today, 29);
    const days = eachDayOfInterval({ start: thirtyDaysAgo, end: today });
    
    return days.map(day => {
      const dateStr = format(day, 'yyyy-MM-dd');
      const data = stats.daily_data[dateStr] || { completed: 0, missed: 0, skipped: 0, total: 0 };
      const completionRate = data.total > 0 ? (data.completed / data.total) * 100 : null;
      
      return {
        date: day,
        dateStr,
        ...data,
        completionRate
      };
    });
  };

  const getCalendarCellColor = (rate) => {
    if (rate === null) return 'bg-muted/30';
    if (rate >= 100) return 'bg-green-500';
    if (rate >= 75) return 'bg-green-400';
    if (rate >= 50) return 'bg-yellow-400';
    if (rate >= 25) return 'bg-orange-400';
    return 'bg-red-400';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-muted-foreground">Loading habits...</div>
      </div>
    );
  }

  const calendarData = generateCalendarData();

  return (
    <div className="space-y-8 animate-fade-in" data-testid="habits-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Habit Tracker
          </h1>
          <p className="text-muted-foreground mt-1">
            Build consistency, track your progress, achieve your goals.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
          <MessageSquare className="h-4 w-4" />
          <span>Create habits via WhatsApp with Daisy</span>
        </div>
      </div>

      {/* No Habits State */}
      {habits.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-semibold mb-3">Start Your First Habit</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Message Daisy on WhatsApp to create your first habit. Try saying:
              <br />
              <span className="font-medium text-foreground">"I want to start meditating every day at 6 AM"</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2">Health</Badge>
              <Badge variant="outline" className="px-4 py-2">Learning</Badge>
              <Badge variant="outline" className="px-4 py-2">Spiritual</Badge>
              <Badge variant="outline" className="px-4 py-2">Work</Badge>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground">Active Habits</p>
                    <p className="text-3xl md:text-4xl font-heading font-semibold mt-1">{stats?.summary?.total_habits || 0}</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-2xl bg-primary/10">
                    <Target className="h-5 w-5 md:h-6 md:w-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground">Best Streak</p>
                    <p className="text-3xl md:text-4xl font-heading font-semibold mt-1">{stats?.summary?.best_current_streak || 0}</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-2xl bg-orange-500/10">
                    <Flame className="h-5 w-5 md:h-6 md:w-6 text-orange-500" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-green-500/5 to-green-500/10">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground">Completion Rate</p>
                    <p className="text-3xl md:text-4xl font-heading font-semibold mt-1">{stats?.summary?.overall_completion_rate || 0}%</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-2xl bg-green-500/10">
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-500" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-amber-500/5 to-amber-500/10">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground">Total Done</p>
                    <p className="text-3xl md:text-4xl font-heading font-semibold mt-1">{stats?.summary?.total_completions || 0}</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-2xl bg-amber-500/10">
                    <Trophy className="h-5 w-5 md:h-6 md:w-6 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Habits List - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="rounded-3xl border-0 shadow-soft">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-xl">Your Habits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {habits.map((habit, index) => (
                    <div 
                      key={habit.id}
                      className="p-4 md:p-5 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setSelectedHabit(selectedHabit?.id === habit.id ? null : habit)}
                      data-testid={`habit-card-${habit.name.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{getStreakEmoji(habit.current_streak)}</span>
                            <h3 className="font-semibold truncate">{habit.name}</h3>
                            <Badge variant="outline" className={`text-xs ${getCategoryColor(habit.category)}`}>
                              {habit.category}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {habit.time} • {habit.frequency}
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame className="h-3.5 w-3.5 text-orange-500" />
                              {habit.current_streak} day streak
                            </span>
                            <span className="text-xs text-muted-foreground/70">
                              {getDifficultyStars(habit.difficulty)}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-green-600">{habit.completion_rate}%</div>
                          <div className="text-xs text-muted-foreground">completion</div>
                        </div>
                      </div>
                      
                      {/* Expanded Details */}
                      {selectedHabit?.id === habit.id && (
                        <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="p-3 rounded-xl bg-green-500/10">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                              <div className="text-lg font-semibold">{habit.total_completions}</div>
                              <div className="text-xs text-muted-foreground">Completed</div>
                            </div>
                            <div className="p-3 rounded-xl bg-red-500/10">
                              <XCircle className="h-5 w-5 text-red-500 mx-auto mb-1" />
                              <div className="text-lg font-semibold">{habit.total_missed}</div>
                              <div className="text-xs text-muted-foreground">Missed</div>
                            </div>
                            <div className="p-3 rounded-xl bg-orange-500/10">
                              <Flame className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                              <div className="text-lg font-semibold">{habit.current_streak}</div>
                              <div className="text-xs text-muted-foreground">Current</div>
                            </div>
                            <div className="p-3 rounded-xl bg-amber-500/10">
                              <Trophy className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                              <div className="text-lg font-semibold">{habit.longest_streak}</div>
                              <div className="text-xs text-muted-foreground">Best</div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{habit.completion_rate}%</span>
                            </div>
                            <Progress value={habit.completion_rate} className="h-2" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* 30-Day Activity Calendar */}
              <Card className="rounded-3xl border-0 shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    30-Day Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-xs text-muted-foreground font-medium py-1">
                        {day}
                      </div>
                    ))}
                    {/* Add empty cells for alignment */}
                    {calendarData.length > 0 && 
                      Array(calendarData[0].date.getDay()).fill(null).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-square" />
                      ))
                    }
                    {calendarData.map((day, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-md ${getCalendarCellColor(day.completionRate)} opacity-90 hover:opacity-100 transition-opacity cursor-pointer`}
                        title={`${format(day.date, 'MMM d')}: ${day.completed}/${day.total} completed`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-sm bg-muted/30" />
                      <div className="w-3 h-3 rounded-sm bg-red-400" />
                      <div className="w-3 h-3 rounded-sm bg-orange-400" />
                      <div className="w-3 h-3 rounded-sm bg-yellow-400" />
                      <div className="w-3 h-3 rounded-sm bg-green-400" />
                      <div className="w-3 h-3 rounded-sm bg-green-500" />
                    </div>
                    <span>More</span>
                  </div>
                </CardContent>
              </Card>

              {/* Best & Needs Attention */}
              <Card className="rounded-3xl border-0 shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stats?.best_habit && (
                    <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">Top Performer</span>
                      </div>
                      <div className="font-semibold">{stats.best_habit.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {stats.best_habit.streak} day streak
                      </div>
                    </div>
                  )}
                  
                  {stats?.worst_habit && stats.worst_habit.name !== stats.best_habit?.name && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-amber-600 mb-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">Needs Attention</span>
                      </div>
                      <div className="font-semibold">{stats.worst_habit.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {stats.worst_habit.streak} day streak
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Category Breakdown */}
              {stats?.category_breakdown && Object.keys(stats.category_breakdown).length > 0 && (
                <Card className="rounded-3xl border-0 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-heading text-lg">By Category</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(stats.category_breakdown).map(([category, data]) => {
                      const rate = data.completions + data.missed > 0 
                        ? Math.round((data.completions / (data.completions + data.missed)) * 100) 
                        : 0;
                      return (
                        <div key={category} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                              <Badge variant="outline" className={`text-xs ${getCategoryColor(category)}`}>
                                {category}
                              </Badge>
                              <span className="text-muted-foreground">({data.count})</span>
                            </span>
                            <span className="font-medium">{rate}%</span>
                          </div>
                          <Progress value={rate} className="h-1.5" />
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </>
      )}

      {/* WhatsApp CTA */}
      <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">Manage via WhatsApp</h3>
              <p className="text-muted-foreground text-sm">
                Reply to Daisy's reminders: <strong>Done</strong>, <strong>Snooze</strong>, or <strong>Skip</strong>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Done
              </Badge>
              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                <Clock className="h-3 w-3 mr-1" /> Snooze
              </Badge>
              <Badge variant="outline" className="bg-gray-500/10 text-gray-600 border-gray-500/20">
                <SkipForward className="h-3 w-3 mr-1" /> Skip
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
