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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  SettingsIcon,
  Upload,
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

  const handleProfileUpdate = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialUpdate = (platform: string, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
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

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="lg">Save All Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
