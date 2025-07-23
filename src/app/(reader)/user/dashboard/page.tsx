"use client";

import { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Bookmark,
  User,
  Bell,
  Settings,
  Search,
  Filter,
  Target,
  Flame,
  Star,
  Plus,
  ChevronRight,
} from "lucide-react";

const ReaderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in a real app, this would come from your API
  const readingStats = {
    articlesThisMonth: 24,
    readingStreak: 7,
    timeSpentReading: 18.5, // hours
    favoriteCategories: ["Technology", "Design", "Business"],
    totalBookmarks: 156,
    followedAuthors: 12,
  };

  const recommendedArticles = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      author: "Sarah Johnson",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
      category: "Technology",
      readTime: "8 min read",
      publishedAt: "2024-01-20",
      excerpt:
        "Exploring the latest trends and technologies shaping web development...",
      isBookmarked: false,
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Design Systems That Scale",
      author: "Mike Chen",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=MC",
      category: "Design",
      readTime: "6 min read",
      publishedAt: "2024-01-19",
      excerpt: "How to build and maintain design systems for growing teams...",
      isBookmarked: true,
      likes: 189,
      comments: 32,
    },
    {
      id: 3,
      title: "Building Resilient Teams",
      author: "Emma Davis",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=ED",
      category: "Business",
      readTime: "5 min read",
      publishedAt: "2024-01-18",
      excerpt: "Strategies for creating teams that thrive under pressure...",
      isBookmarked: false,
      likes: 156,
      comments: 28,
    },
  ];

  const followedAuthors = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      specialty: "Frontend Development",
      followers: "12.5K",
      newPosts: 2,
      isFollowing: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
      specialty: "UI/UX Design",
      followers: "8.3K",
      newPosts: 1,
      isFollowing: true,
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "/placeholder.svg?height=40&width=40&text=ED",
      specialty: "Product Management",
      followers: "15.2K",
      newPosts: 3,
      isFollowing: true,
    },
  ];

  const bookmarkedArticles = [
    {
      id: 1,
      title: "Advanced React Patterns",
      author: "John Doe",
      category: "Technology",
      bookmarkedAt: "2024-01-20",
      readTime: "12 min read",
      isRead: false,
    },
    {
      id: 2,
      title: "Color Theory for Developers",
      author: "Jane Smith",
      category: "Design",
      bookmarkedAt: "2024-01-19",
      readTime: "7 min read",
      isRead: true,
    },
    {
      id: 3,
      title: "Scaling Startup Culture",
      author: "Alex Wilson",
      category: "Business",
      bookmarkedAt: "2024-01-18",
      readTime: "9 min read",
      isRead: false,
    },
  ];

  const trendingTopics = [
    { name: "AI & Machine Learning", posts: 156, growth: "+23%" },
    { name: "React 18", posts: 89, growth: "+15%" },
    { name: "Design Systems", posts: 67, growth: "+12%" },
    { name: "Remote Work", posts: 45, growth: "+8%" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reader Dashboard</h1>
          <p className="text-muted-foreground">
            Discover, read, and organize your favorite content
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Browse Articles
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Preferences
          </Button>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="library">My Library</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Personal Reading Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Articles Read
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {readingStats.articlesThisMonth}
                </div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Reading Streak
                </CardTitle>
                <Flame className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {readingStats.readingStreak}
                </div>
                <p className="text-xs text-muted-foreground">Days in a row</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Time Reading
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {readingStats.timeSpentReading}h
                </div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bookmarks</CardTitle>
                <Bookmark className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {readingStats.totalBookmarks}
                </div>
                <p className="text-xs text-muted-foreground">Saved articles</p>
              </CardContent>
            </Card>
          </div>

          {/* Favorite Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Favorite Categories
              </CardTitle>
              <CardDescription>
                Your most read topics this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {readingStats.favoriteCategories.map((category, index) => (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">#{index + 1}</Badge>
                      <span className="font-medium">{category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={90 - index * 20} className="w-20" />
                      <span className="text-sm text-muted-foreground">
                        {90 - index * 20}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personalized Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recommended Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recommended for You
                </CardTitle>
                <CardDescription>Based on your reading history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="space-y-3 pb-4 border-b last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm hover:text-primary cursor-pointer line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <Bookmark
                          className={`h-4 w-4 ${
                            article.isBookmarked ? "fill-current" : ""
                          }`}
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage
                            src={article.authorAvatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{article.author}</span>
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Latest from Followed Authors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Latest from Authors You Follow
                </CardTitle>
                <CardDescription>
                  New posts from your favorite writers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {followedAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={author.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{author.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {author.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{author.newPosts} new</Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {author.followers} followers
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 bg-transparent"
                >
                  <Search className="h-6 w-6" />
                  <span className="text-sm">Browse Latest</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 bg-transparent"
                >
                  <Settings className="h-6 w-6" />
                  <span className="text-sm">Update Preferences</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 bg-transparent"
                >
                  <Bookmark className="h-6 w-6" />
                  <span className="text-sm">View Bookmarks</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 bg-transparent"
                >
                  <TrendingUp className="h-6 w-6" />
                  <span className="text-sm">Trending Topics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Library Tab */}
        <TabsContent value="library" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bookmarked Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bookmark className="h-5 w-5" />
                  Bookmarked Articles
                </CardTitle>
                <CardDescription>
                  Your saved articles for later reading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {bookmarkedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="space-y-2 pb-4 border-b last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm hover:text-primary cursor-pointer">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span>by {article.author}</span>
                          <Badge variant="outline">{article.category}</Badge>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {article.isRead && (
                          <Badge variant="secondary">Read</Badge>
                        )}
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Saved on{" "}
                      {new Date(article.bookmarkedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reading Queue */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Reading Queue
                </CardTitle>
                <CardDescription>
                  Articles you plan to read next
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Your reading queue is empty
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Add articles to your queue to read them later
                    </p>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Browse Articles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Following Tab */}
        <TabsContent value="following" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Authors You Follow
              </CardTitle>
              <CardDescription>
                Stay updated with your favorite writers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {followedAuthors.map((author) => (
                <div
                  key={author.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={author.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{author.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {author.specialty}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {author.followers} followers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {author.newPosts > 0 && (
                      <Badge variant="secondary">
                        {author.newPosts} new posts
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">
                      {author.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Discover Tab */}
        <TabsContent value="discover" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
                <CardDescription>
                  Popular topics in your areas of interest
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">#{index + 1}</Badge>
                      <div>
                        <p className="font-medium text-sm">{topic.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {topic.posts} posts
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {topic.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Author Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Recommended Authors
                </CardTitle>
                <CardDescription>
                  Writers you might want to follow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "David Miller",
                    specialty: "DevOps",
                    followers: "9.1K",
                  },
                  {
                    name: "Lisa Wang",
                    specialty: "Data Science",
                    followers: "11.3K",
                  },
                  {
                    name: "Tom Brown",
                    specialty: "Mobile Dev",
                    followers: "7.8K",
                  },
                ].map((author) => (
                  <div
                    key={author.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{author.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {author.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        {author.followers} followers
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Category Preferences
                </CardTitle>
                <CardDescription>
                  Choose your favorite topics and interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Technology",
                  "Design",
                  "Business",
                  "Science",
                  "Health",
                  "Lifestyle",
                ].map((category) => (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium">{category}</span>
                    <Button variant="outline" size="sm">
                      {readingStats.favoriteCategories.includes(category)
                        ? "Following"
                        : "Follow"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your account and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile Information
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Reading Preferences
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReaderDashboard;
