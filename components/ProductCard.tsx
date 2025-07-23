"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (cents: number) => {
    return `NT$${(cents / 100).toLocaleString()}`;
  };

  const handleExploreMore = () => {
    // 在新分頁中打開（這裡用示例連結）
    window.open(`https://example.com/product/${product.id}`, '_blank');
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border overflow-hidden">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-title font-semibold text-foreground line-clamp-2">
            沉醉之夜，從一杯特調開始
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            在這個充滿神秘氛圍的夜晚，讓精心調製的威士忌帶您進入一個全新的感官世界...
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            {formatPrice(product.price_in_cents)}
          </span>
          <Button
            onClick={handleExploreMore}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-title"
          >
            探索更多
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}