'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      <div className="grid-bg"></div>
      <div className="orb orb2"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#4a90e2] tracking-wider uppercase mb-4 anim">
            Liên hệ
          </div>
          <h2 className="text-5xl font-extrabold mb-6 anim">
            Sẵn sàng <em className="not-italic text-[#4a90e2]">hợp tác</em>?
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto anim">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 anim">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Họ và tên *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:border-[#4a90e2] focus:outline-none transition-colors"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:border-[#4a90e2] focus:outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Số điện thoại *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:border-[#4a90e2] focus:outline-none transition-colors"
                placeholder="0912 345 678"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Công ty</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:border-[#4a90e2] focus:outline-none transition-colors"
                placeholder="Tên công ty"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Nội dung *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:border-[#4a90e2] focus:outline-none transition-colors resize-none"
              placeholder="Mô tả nhu cầu của bạn..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1b5fd4] text-white py-4 rounded-lg font-semibold hover:bg-[#1348b0] hover:-translate-y-1 transition-all shadow-lg shadow-[rgba(27,95,212,0.3)]"
          >
            Gửi yêu cầu →
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent border border-[rgba(255,255,255,0.1)] rounded-xl anim">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">info@yihuixuan.vn</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent border border-[rgba(255,255,255,0.1)] rounded-xl anim">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h4 className="font-semibold mb-1">Hotline</h4>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">1900 xxxx</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent border border-[rgba(255,255,255,0.1)] rounded-xl anim">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#4a90e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h4 className="font-semibold mb-1">Địa chỉ</h4>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">Bắc Ninh, Việt Nam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
