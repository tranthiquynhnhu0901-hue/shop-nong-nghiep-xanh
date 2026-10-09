import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden bg-gray-900">
        {/* Đưa ảnh banner (ảnh đầu tiên được generate) vào thư mục public/images/banner.webp */}
        <img 
          src="/images/banner.webp" 
          alt="Nông nghiệp thông minh" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Vật Tư Nông Nghiệp Tiêu Chuẩn
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Kết nối nhà vườn, cung cấp giải pháp xanh cho năng suất vượt trội.
            </p>
            <button className="bg-agriGreen-500 text-white px-8 py-3 rounded-full font-bold hover:bg-agriGreen-600 transition">
              Mua Sắm Ngay
            </button>
          </div>
        </div>
      </div>

      {/* Sản phẩm nổi bật */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-agriGreen-500 pl-4">
          Sản Phẩm Khuyên Dùng
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-agriGreen-600 mb-2 block">{product.category}</span>
                <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">
                    {product.price.toLocaleString('vi-VN')}đ
                  </span>
                  <button className="p-2 bg-agriGreen-50 text-agriGreen-700 rounded-full hover:bg-agriGreen-500 hover:text-white transition">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}