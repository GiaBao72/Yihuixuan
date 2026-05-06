export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-5 py-2 mb-8 anim">
          <span className="w-2 h-2 bg-[#4a90e2] rounded-full animate-pulse"></span>
          <span className="text-sm text-[rgba(255,255,255,0.7)]">Tập trung vào tùy chỉnh laser · Phục vụ bằng cả trái tim</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 anim">
          Thiết bị <em className="not-italic text-[#4a90e2]">Laser</em>
          <br />
          Công nghiệp
          <br />
          chính xác tuyệt đối
        </h1>

        <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-3xl mx-auto mb-10 anim">
          Suzhou Borna & Vietnam Yihuixuan (Nghệ Huy Hiên) — cung cấp thiết bị laser công nghiệp, tự động hóa và giải pháp xử lý quy trình hoàn chỉnh cho nhà máy hiện đại tại Việt Nam
        </p>

        <div className="flex flex-wrap gap-4 justify-center anim">
          <a
            href="#products"
            className="bg-[#1b5fd4] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#1348b0] hover:-translate-y-1 transition-all shadow-lg shadow-[rgba(27,95,212,0.3)]"
          >
            Khám phá sản phẩm →
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-lg text-base font-semibold hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] transition-all"
          >
            Liên hệ tư vấn
          </a>
        </div>
      </div>
    </section>
  );
}
