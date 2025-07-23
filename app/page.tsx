import { AgeVerificationDialog } from "@/components/AgeVerificationDialog";
import { Navigation } from "@/components/Navigation";
import { NovelContent } from "@/components/NovelContent";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

// PRD 中的範例小說內容
const sampleNovel = {
  title: "墨色交纏的夜晚",
  author: "C.L.",
  content: `城市的心跳在午夜後逐漸趨緩，霓虹的殘影被細雨暈染開來，在落地窗上劃出一道道曖昧的淚痕。艾薇推開那扇厚重的橡木門時，風鈴發出清脆而孤單的聲響，像是為她一個人的到來而奏的序曲。

這家名為「獨白」的深夜書店，與其說是書店，不如說是一個收藏著秘密與慾望的庇護所。空氣中瀰漫著舊書的紙張香、現磨咖啡的醇厚，還有一絲若有似無的、屬於皮革與威士忌的危險氣息。

她沿著書架緩緩走著，指尖輕輕劃過一本本書脊。她不是來找某本書的，她是來找一種感覺，一種能將她從現實的枷鎖中暫時釋放的感覺。

就在她轉過一個拐角時，她看見了他。

他坐在一張深棕色的單人沙發裡，幾乎與陰影融為一體。一盞昏黃的立燈在他身側投下唯一的光源，恰好勾勒出他握著玻璃杯的修長手指，以及專注凝視著書頁的側臉。他沒有抬頭，卻彷彿早已察覺了她的存在。空氣的流動，似乎因為她的停步而變得黏稠起來。

艾薇的心跳漏了一拍。她認識那種專注，那是獵人等待獵物時的耐心。而她，似乎正一步步踏入他精心佈置的、由墨色與寂靜編織的網中。她沒有逃，反而，朝他走了過去，高跟鞋敲擊木地板的聲音，在這一刻顯得格外清晰，也格外……充滿了邀請的意味。`,
  tags: ["都會戀情", "心理描寫", "神秘氛圍", "深夜書店"]
};

export default function Home() {
  return (
    <>
      <AgeVerificationDialog />
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* 主要內容區域 - 雙欄佈局 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* 左側主欄 - 小說內容 (70% 寬度) */}
            <div className="lg:col-span-7">
              <NovelContent
                title={sampleNovel.title}
                author={sampleNovel.author}
                content={sampleNovel.content}
                tags={sampleNovel.tags}
              />
            </div>
            
            {/* 右側副欄 - 商品推薦和標籤 (30% 寬度) */}
            <div className="lg:col-span-3 order-first lg:order-last">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}