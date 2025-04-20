import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react'

const Index = () => {

  const [activeTab, setActiveTab] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Header data
  const headerLinks = [
    { name: '关于我们', href: '#', id: 'about' },
    { name: '品牌故事', href: '#', id: 'story' },
    { name: '新闻动态', href: '#', id: 'news' },
    { name: '产品中心', href: '#', id: 'products' },
    { name: '联系我们', href: '#', id: 'contact' },
  ];

  // Mock hero content
  const heroContent = {
    title: "西南·和道",
    subtitle: "专注高品质食材",
    ctaText: "了解详情",
    ctaLink: "#"
  };

  // Mock products
  const products = [
    {
      id: 1,
      name: "精品火腿",
      description: "精选优质猪肉，传统工艺腌制",
      image: "https://images.unsplash.com/photo-1622286342621-4bd686b30832",
    },
    {
      id: 2, 
      name: "香肠系列",
      description: "多种风味，真材实料",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
    },
    {
      id: 3,
      name: "腊肉制品",
      description: "传统烟熏工艺，独特风味",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-600">西南和道</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {headerLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`hover:text-red-600 transition ${activeTab === link.id ? 'text-red-600 font-medium' : ''}`}
              onClick={() => setActiveTab(link.id)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
            <nav className="flex flex-col space-y-4">
              {headerLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href}
                  className={`py-2 hover:text-red-600 ${activeTab === link.id ? 'text-red-600 font-medium' : ''}`}
                  onClick={() => {
                    setActiveTab(link.id);
                    setShowMobileMenu(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{heroContent.title}</h1>
          <p className="text-2xl text-white mb-8">{heroContent.subtitle}</p>
          <a 
            href={heroContent.ctaLink}
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition inline-block"
          >
            {heroContent.ctaText}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">关于我们</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              西南和道是一家专注于高品质肉制品生产与销售的企业。我们秉承传统工艺，精选优质原料，致力为消费者提供安全、美味的食品。
            </p>
            <p className="text-lg">
              我们的产品采用现代化生产流程，严格把控每一道工序，确保产品品质稳定可靠。
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2" 
              alt="工厂生产环境"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-100">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">产品中心</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-red-600 hover:text-red-700 transition font-medium">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li><strong>地址：</strong>云南省某市某区</li>
              <li><strong>电话：</strong>123-4567-8910</li>
              <li><strong>邮箱：</strong>info@sxhdqwzmb.e.cn.vc</li>
              <li><strong>营业时间：</strong>周一至周五 9:00-18:00</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581499460102-59ea331d78a7" 
              alt="联系我们"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">西南和道</h3>
            <p className="text-gray-400">
              专注高品质食材，传统工艺与现代科技完美结合的肉制品专家。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <nav className="space-y-2">
              {headerLinks.map((link) => (
                <a key={link.id} href={link.href} className="block text-gray-400 hover:text-white transition">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition">
                <span className="sr-only">微信</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition">
                <span className="sr-only">微博</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 12 10s12-4.477 12-10c0-5.523-4.477-10-12-10zm-2 15.5v-7l6 4-6 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© 2023 西南和道. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;