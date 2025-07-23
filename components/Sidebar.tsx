"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const novelTags = [
  "成人文學",
  "情慾描寫",
  "心理分析",
  "都市愛情",
  "深夜書店",
  "神秘氛圍",
  "感官體驗"
];

export function Sidebar() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomProduct = async () => {
      try {
        const response = await fetch('/api/products');
        const products: Product[] = await response.json();
        
        // 隨機選擇一個商品
        const randomIndex = Math.floor(Math.random() * products.length);
        setProduct(products[randomIndex]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomProduct();
  }, []);

  return (
    <aside className="w-full space-y-8">
      {/* 本週推薦商品 */}
      <div className="sticky top-24">
        <h2 className="text-lg font-title font-semibold text-foreground mb-4 text-center">
          本週推薦
        </h2>
        
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2 p-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </div>
        ) : product ? (
          <ProductCard product={product} />
        ) : (
          <div className="text-center text-muted-foreground p-8">
            暫無推薦商品
          </div>
        )}
      </div>

      {/* 相關標籤 */}
      <div className="sticky top-96">
        <h3 className="text-base font-title font-medium text-foreground mb-4 text-center">
          相關標籤
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {novelTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-primary/30 text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
}