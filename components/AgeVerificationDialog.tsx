"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AgeVerificationDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 檢查 localStorage 是否已有年齡驗證記錄
    const hasVerified = localStorage.getItem("age-verified");
    if (!hasVerified) {
      setOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("age-verified", "true");
    setOpen(false);
  };

  const handleReject = () => {
    // 重定向到其他網站或顯示拒絕訪問頁面
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md bg-card border-border"
        showCloseButton={false}
      >
        <DialogHeader className="text-center space-y-4">
          <DialogTitle className="text-2xl font-title text-foreground">
            年齡驗證
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
            本網站內容僅限年滿 18 歲成人閱覽
            <br />
            <br />
            請確認您已年滿 18 歲，且同意瀏覽成人內容。
            <br />
            <br />
            <span className="text-sm text-accent">
              繼續訪問即表示您已確認符合上述條件
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={handleConfirm}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-title"
          >
            我已年滿 18 歲，同意進入
          </Button>
          <Button 
            onClick={handleReject}
            variant="outline"
            className="border-border hover:bg-muted font-title"
          >
            我未滿 18 歲，離開網站
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}