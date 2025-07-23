"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NovelContentProps {
  title: string;
  author: string;
  content: string;
  tags?: string[];
}

export function NovelContent({ title, author, content, tags = [] }: NovelContentProps) {
  return (
    <div className="space-y-8">
      {/* 標題區域 */}
      <div className="space-y-4 border-b border-border pb-6">
        <h1 className="text-3xl lg:text-4xl font-title font-bold text-foreground leading-tight">
          {title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-lg text-muted-foreground">
            作者：<span className="text-primary font-medium">{author}</span>
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 正文內容 */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-foreground leading-relaxed space-y-6 font-body text-base lg:text-lg"
          style={{ lineHeight: '1.8' }}
        >
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 first-letter:text-2xl first-letter:font-semibold first-letter:text-primary">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* 章節導航 */}
      <div className="flex items-center justify-between pt-8 border-t border-border">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-border hover:bg-muted font-title"
        >
          <ChevronLeft className="w-4 h-4" />
          上一章
        </Button>
        
        <div className="text-sm text-muted-foreground">
          第 1 章
        </div>
        
        <Button 
          variant="outline"
          className="flex items-center gap-2 border-border hover:bg-muted font-title"
        >
          下一章
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}