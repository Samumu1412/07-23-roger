import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* 重要警語 */}
          <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-secondary font-title font-semibold text-lg mb-2">
              ⚠️ 重要警語
            </p>
            <p className="text-foreground font-body">
              本網站內容僅限年滿 18 歲成人閱覽
            </p>
          </div>

          <Separator className="my-6 bg-border" />

          {/* 版權聲明 */}
          <p className="text-muted-foreground text-sm font-body">
            Copyright © 夜讀文學 {currentYear}. All rights reserved.
          </p>

          {/* 連結 */}
          <div className="flex items-center justify-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              服務條款
            </a>
            <span className="text-border">|</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              隱私政策
            </a>
            <span className="text-border">|</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}