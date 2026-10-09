import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCart, User, Search } from "lucide-react";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Nông Nghiệp Xanh | Hệ sinh thái vật tư nông nghiệp",
  description: "Cung cấp cây giống, phân bón, chế phẩm sinh học và kỹ thuật chăm sóc cây trồng chuyên nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold text-agriGreen-700">Nông Nghiệp Xanh</div>
            
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder="Tìm hạt giống, phân bón..." className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-agriGreen-500" />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex space-x-6">
              <button className="flex flex-col items-center text-gray-600 hover:text-agriGreen-600">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">Tài khoản</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-agriGreen-600 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-xs mt-1">Giỏ hàng</span>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
          
          <nav className="bg-agriGreen-700 text-white hidden md:block">
            <ul className="max-w-7xl mx-auto px-4 flex space-x-8 py-3 text-sm font-medium">
              <li className="hover:text-agriGreen-100 cursor-pointer">Trang chủ</li>
              <li className="hover:text-agriGreen-100 cursor-pointer">Cây giống</li>
              <li className="hover:text-agriGreen-100 cursor-pointer">Phân bón & Thuốc BVT</li>
              <li className="hover:text-agriGreen-100 cursor-pointer">Vật tư làm vườn</li>
              <li className="hover:text-agriGreen-100 cursor-pointer">Cẩm nang kỹ thuật</li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen bg-gray-50 pb-12">
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-agriGreen-500">Nông Nghiệp Xanh</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Đồng hành cùng nông dân Việt. Cam kết cung cấp sản phẩm vật tư nông nghiệp chính hãng, chất lượng cao.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Chính sách</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Chính sách giao hàng</li>
                <li>Đổi trả & Hoàn tiền</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}