"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Calendar,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
  PenTool,
} from "lucide-react";
import Link from "next/link";

const AllPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Mock data - in a real app, this would come from your API
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn the fundamentals of React Hooks and how they can simplify your component logic...",
      status: "published",
      category: "Technology",
      tags: ["React", "JavaScript", "Hooks"],
      publishedAt: "2024-01-20",
      views: 2340,
      likes: 89,
      comments: 23,
      shares: 45,
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Modern UIs with Tailwind CSS",
      excerpt:
        "Discover how Tailwind CSS can speed up your development process and create beautiful designs...",
      status: "published",
      category: "Design",
      tags: ["CSS", "Tailwind", "UI/UX"],
      publishedAt: "2024-01-18",
      views: 1890,
      likes: 67,
      comments: 18,
      shares: 32,
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for 2024",
      excerpt:
        "Essential TypeScript patterns and practices that every developer should know...",
      status: "draft",
      category: "Technology",
      tags: ["TypeScript", "Best Practices"],
      publishedAt: null,
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Advanced Next.js Patterns",
      excerpt:
        "Explore advanced patterns and techniques for building scalable Next.js applications...",
      status: "scheduled",
      category: "Technology",
      tags: ["Next.js", "React", "SSR"],
      publishedAt: "2024-01-25",
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "State Management in React",
      excerpt:
        "Compare different state management solutions and learn when to use each approach...",
      status: "published",
      category: "Technology",
      tags: ["React", "State Management", "Redux"],
      publishedAt: "2024-01-15",
      views: 1650,
      likes: 54,
      comments: 15,
      shares: 28,
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox",
      excerpt:
        "Understanding when to use CSS Grid versus Flexbox for your layout needs...",
      status: "published",
      category: "Design",
      tags: ["CSS", "Grid", "Flexbox"],
      publishedAt: "2024-01-12",
      views: 789,
      likes: 32,
      comments: 8,
      shares: 15,
      readTime: "4 min read",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not published";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold">All Posts</h1>
          <Badge variant="secondary">{filteredPosts.length} posts</Badge>
        </div>
        <Link href="/editor">
          <Button className="cursor-pointer">
            <PenTool className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 space-y-4">
              {/* Title and Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <Badge className={getStatusColor(post.status)}>
                  {post.status}
                </Badge>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <Badge variant="outline">{post.category}</Badge>
                <span>{post.readTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats + Actions */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
                {post.status === "published" && (
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      {post.shares}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Post
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ||
                statusFilter !== "all" ||
                categoryFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "You haven't created any posts yet"}
              </p>
              <Button>
                <PenTool className="h-4 w-4 mr-2" />
                Create Your First Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AllPosts;
