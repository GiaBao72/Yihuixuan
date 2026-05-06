export default function Industries() {
  const industries = [
    { name: 'Điện tử 3C', icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18' },
    { name: 'Cáp & Đầu nối', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Y tế & Thẩm mỹ', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { name: 'Pin xe điện', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Dược phẩm', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { name: 'Ô tô & Gia dụng', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  ];

  const reasons = [
    { title: 'Công nghệ tiên tiến', desc: 'Thiết bị laser thế hệ mới từ Suzhou Borna' },
    { title: 'Tùy chỉnh linh hoạt', desc: 'Giải pháp được thiết kế riêng cho từng khách hàng' },
    { title: 'Hỗ trợ 24/7', desc: 'Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc' },
    { title: 'Bảo hành dài hạn', desc: 'Cam kết chất lượng với chính sách bảo hành tốt nhất' },
  ];

  return (
    <section id="industries" className="relative min-h-screen py-20 overflow-hidden">
      <div className="grid-bg"></div>
      <div className="orb orb1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Industries */}
          <div>
            <div className="text-sm font-semibold text-[#4a90e2] tracking-wider uppercase mb-4 anim">
              Ngành ứng dụng
            </div>
            <h2 className="text-4xl font-extrabold mb-8 anim">
              Phục vụ đa dạng
              <br />
              <em className="not-italic text-[#4a90e2]">ngành công nghiệp</em>
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 hover:border-[#4a90e2] hover:shadow-lg hover:shadow-[rgba(27,95,212,0.2)] transition-all anim"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1b5fd4] to-[#4a90e2] rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={industry.icon} />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold">{industry.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="text-sm font-semibold text-[#4a90e2] tracking-wider uppercase mb-4 anim">
              Tại sao chọn chúng tôi
            </div>
            <h2 className="text-4xl font-extrabold mb-8 anim">
              Lý do khách hàng
              <br />
              <em className="not-italic text-[#4a90e2]">tin tưởng</em>
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-transparent border-l-4 border-[#4a90e2] p-5 rounded-lg anim"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                  <p className="text-[rgba(255,255,255,0.6)] text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
