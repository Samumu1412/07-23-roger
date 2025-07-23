"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Moon, Sun, BookOpen } from "lucide-react";

const categories = [
  "都會戀情",
  "奇幻異境", 
  "BDSM",
  "百合"
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-xl font-title font-semibold text-foreground">
              夜讀文學
            </span>
          </div>

          {/* Categories - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-muted-foreground hover:text-primary hover:bg-muted font-title"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center">
                  <Input
                    placeholder="搜尋小說..."
                    className="w-64 h-9 bg-muted border-border focus:border-primary"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchOpen(true)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile categories */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}