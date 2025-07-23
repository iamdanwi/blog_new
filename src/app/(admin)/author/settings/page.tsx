/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  SettingsIcon,
  Bell,
  PenTool,
  Upload,
  X,
  Plus,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Phone,
} from "lucide-react";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    bio: "Full-stack developer passionate about creating amazing web experiences. I write about React, TypeScript, and modern web development.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.dev",
    profilePicture: "/placeholder.svg?height=100&width=100&text=JD",
  });

  const [socialLinks, setSocialLinks] = useState({
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  });

  const [publishingPrefs, setPublishingPrefs] = useState({
    defaultCategory: "Technology",
    autoPublish: false,
    scheduleTime: "09:00",
    emailNotifications: true,
    commentNotifications: true,
    mentionNotifications: true,
  });

  const [defaultTags, setDefaultTags] = useState([
    "React",
    "TypeScript",
    "Web Development",
  ]);
  const [newTag, setNewTag] = useState("");

  const [writingPrefs, setWritingPrefs] = useState({
    autoSave: true,
    spellCheck: true,
    wordWrap: true,
    fontSize: "medium",
    theme: "light",
  });

  const addTag = () => {
    if (newTag.trim() && !defaultTags.includes(newTag.trim())) {
      setDefaultTags([...defaultTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setDefaultTags(defaultTags.filter((tag) => tag !== tagToRemove));
  };

  const handleProfileUpdate = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialUpdate = (platform: string, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  const handlePublishingUpdate = (field: string, value: any) => {
    setPublishingPrefs((prev) => ({ ...prev, [field]: value }));
  };

  const handleWritingUpdate = (field: string, value: any) => {
    setWritingPrefs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 space-y-6 max-w-8xl">
      {/* Header */}
      <div className="flex items-center gap-2">
        <SettingsIcon className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      {/* Profile & Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Author Profile
          </CardTitle>
          <CardDescription>
            Manage your public profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={profileData.profilePicture || "/placeholder.svg"}
                alt="Profile"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Picture
              </Button>
              <p className="text-xs text-muted-foreground">
                JPG, PNG or GIF. Max size 2MB. Recommended: 400x400px
              </p>
            </div>
          </div>

          <Separator />

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => handleProfileUpdate("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => handleProfileUpdate("email", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell readers about yourself..."
              value={profileData.bio}
              onChange={(e) => handleProfileUpdate("bio", e.target.value)}
              className="min-h-[100px]"
            />
            <p className="text-xs text-muted-foreground">
              {profileData.bio.length}/500 characters
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    className="pl-10"
                    value={profileData.phone}
                    onChange={(e) =>
                      handleProfileUpdate("phone", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="website"
                    className="pl-10"
                    value={profileData.website}
                    onChange={(e) =>
                      handleProfileUpdate("website", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Media Links</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="twitter"
                    className="pl-10"
                    placeholder="https://twitter.com/username"
                    value={socialLinks.twitter}
                    onChange={(e) =>
                      handleSocialUpdate("twitter", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="linkedin"
                    className="pl-10"
                    placeholder="https://linkedin.com/in/username"
                    value={socialLinks.linkedin}
                    onChange={(e) =>
                      handleSocialUpdate("linkedin", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <div className="relative">
                  <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="github"
                    className="pl-10"
                    placeholder="https://github.com/username"
                    value={socialLinks.github}
                    onChange={(e) =>
                      handleSocialUpdate("github", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Publishing Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-5 w-5" />
            Publishing Preferences
          </CardTitle>
          <CardDescription>
            Configure your default publishing settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Default Categories and Tags */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="defaultCategory">Default Category</Label>
              <Select
                value={publishingPrefs.defaultCategory}
                onValueChange={(value) =>
                  handlePublishingUpdate("defaultCategory", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="Tutorial">Tutorial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Default Tags</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {defaultTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                />
                <Button onClick={addTag} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Auto-publishing Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Auto-publishing Settings</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-publish posts</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically publish posts at scheduled time
                </p>
              </div>
              <Switch
                checked={publishingPrefs.autoPublish}
                onCheckedChange={(checked) =>
                  handlePublishingUpdate("autoPublish", checked)
                }
              />
            </div>
            {publishingPrefs.autoPublish && (
              <div className="space-y-2">
                <Label htmlFor="scheduleTime">Default Publishing Time</Label>
                <Input
                  id="scheduleTime"
                  type="time"
                  value={publishingPrefs.scheduleTime}
                  onChange={(e) =>
                    handlePublishingUpdate("scheduleTime", e.target.value)
                  }
                  className="w-32"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Choose what notifications you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email updates about your blog activity
              </p>
            </div>
            <Switch
              checked={publishingPrefs.emailNotifications}
              onCheckedChange={(checked) =>
                handlePublishingUpdate("emailNotifications", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Comment notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when someone comments on your posts
              </p>
            </div>
            <Switch
              checked={publishingPrefs.commentNotifications}
              onCheckedChange={(checked) =>
                handlePublishingUpdate("commentNotifications", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Mention notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when someone mentions you
              </p>
            </div>
            <Switch
              checked={publishingPrefs.mentionNotifications}
              onCheckedChange={(checked) =>
                handlePublishingUpdate("mentionNotifications", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Writing Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-5 w-5" />
            Writing Preferences
          </CardTitle>
          <CardDescription>Customize your writing experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-save</Label>
              <p className="text-sm text-muted-foreground">
                Automatically save your work as you type
              </p>
            </div>
            <Switch
              checked={writingPrefs.autoSave}
              onCheckedChange={(checked) =>
                handleWritingUpdate("autoSave", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Spell check</Label>
              <p className="text-sm text-muted-foreground">
                Enable spell checking in the editor
              </p>
            </div>
            <Switch
              checked={writingPrefs.spellCheck}
              onCheckedChange={(checked) =>
                handleWritingUpdate("spellCheck", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Word wrap</Label>
              <p className="text-sm text-muted-foreground">
                Wrap long lines in the editor
              </p>
            </div>
            <Switch
              checked={writingPrefs.wordWrap}
              onCheckedChange={(checked) =>
                handleWritingUpdate("wordWrap", checked)
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Font Size</Label>
              <Select
                value={writingPrefs.fontSize}
                onValueChange={(value) =>
                  handleWritingUpdate("fontSize", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Editor Theme</Label>
              <Select
                value={writingPrefs.theme}
                onValueChange={(value) => handleWritingUpdate("theme", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="lg">Save All Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
