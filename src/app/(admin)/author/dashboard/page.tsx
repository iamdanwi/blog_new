"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PenTool,
  FileText,
  Eye,
  Heart,
  Users,
  TrendingUp,
  MessageCircle,
  Share2,
  Calendar,
  BarChart3,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  // Mock data - in a real app, this would come from your API
  const authorStats = {
    totalPosts: 24,
    totalViews: 15420,
    engagementRate: 4.2,
    followerCount: 1250,
  };

  const popularPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      views: 2340,
      likes: 89,
      comments: 23,
      publishedAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Building Modern UIs with Tailwind CSS",
      views: 1890,
      likes: 67,
      comments: 18,
      publishedAt: "2024-01-10",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for 2024",
      views: 1650,
      likes: 54,
      comments: 15,
      publishedAt: "2024-01-08",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Advanced Next.js Patterns",
      status: "published",
      views: 456,
      engagement: 3.8,
      publishedAt: "2024-01-20",
    },
    {
      id: 2,
      title: "State Management in React",
      status: "draft",
      views: 0,
      engagement: 0,
      publishedAt: null,
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      status: "published",
      views: 789,
      engagement: 5.2,
      publishedAt: "2024-01-18",
    },
  ];

  const socialShares = [
    { platform: "Twitter", shares: 234, growth: "+12%" },
    { platform: "LinkedIn", shares: 156, growth: "+8%" },
    { platform: "Facebook", shares: 89, growth: "+5%" },
    { platform: "Reddit", shares: 67, growth: "+15%" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your blog overview.
          </p>
        </div>
        <Link href="/author/editor">
          <Button className="cursor-pointer">
            <PenTool className="h-4 w-4 mr-2" />
            Write New Post
          </Button>
        </Link>
      </div>

      {/* Author Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Posts Published
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{authorStats.totalPosts}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {authorStats.totalViews.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Engagement Rate
            </CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {authorStats.engagementRate}%
            </div>
            <p className="text-xs text-muted-foreground">
              +0.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {authorStats.followerCount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+47 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Popular Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Most Popular Posts
            </CardTitle>
            <CardDescription>
              Your top performing content this month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">#{index + 1}</Badge>
                    <h4 className="font-medium text-sm">{post.title}</h4>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Post Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Post Performance
            </CardTitle>
            <CardDescription>Performance of your latest posts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{post.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={
                          post.status === "published" ? "default" : "secondary"
                        }
                      >
                        {post.status}
                      </Badge>
                      {post.publishedAt && (
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium">{post.views} views</div>
                    <div className="text-muted-foreground">
                      {post.engagement}% engagement
                    </div>
                  </div>
                </div>
                <Progress value={post.engagement * 10} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Comment Engagement & Social Shares */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Comment Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Comment Engagement
            </CardTitle>
            <CardDescription>
              Recent comment activity on your posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Comments This Month</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Comments per Post</span>
                <span className="font-bold">6.5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Response Rate</span>
                <span className="font-bold">89%</span>
              </div>
              <div className="pt-2">
                <div className="text-sm text-muted-foreground mb-2">
                  Comment Trend
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  +12% increase from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Shares */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Shares
            </CardTitle>
            <CardDescription>How your content is being shared</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {socialShares.map((platform) => (
                <div
                  key={platform.platform}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Share2 className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{platform.platform}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{platform.shares}</div>
                    <div className="text-xs text-green-600">
                      {platform.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

     
    </div>
  );
};

export default Dashboard;
