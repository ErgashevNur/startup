// import Header from '../components/Header'

// export default function Home() {
//   return (
// <Header/>
//   )
// }


import React from 'react';

// Header Component
const HeaderDemo = () => (
  <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between border border-gray-100 mb-5">
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 bg-gradient-to-br from-gray-800 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
      <span className="text-xl font-semibold text-gray-800">MOZEN</span>
    </div>
    <nav>
      <ul className="flex gap-6">
        {['Kategoriyalar', 'Aksiyalar', 'Brendlar', 'Yordam'].map(item => (
          <li key={item}>
            <a href="#" className="text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Mahsulot qidirish..."
        className="bg-gray-100 border border-gray-200 rounded-full px-5 py-2 w-64 text-sm outline-none"
      />
      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition">♡</button>
      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition relative">
        🛒
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
      </button>
      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition">👤</button>
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ title, price, oldPrice, discount, rating, reviews, badge }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100">
    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-500 text-sm relative">
      {badge && <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{badge}</div>}
      <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition">♡</button>
      Mahsulot rasmi
    </div>
    <div className="p-5">
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="text-yellow-500 text-sm">{rating}</div>
        <span className="text-gray-500 text-xs">({reviews} sharh)</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-bold text-gray-800">{price}</span>
        {oldPrice && <span className="text-gray-400 line-through">{oldPrice}</span>}
        {discount && <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">{discount}</span>}
      </div>
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 hover:-translate-y-0.5 transition">
        Savatga qo'shish
      </button>
    </div>
  </div>
);

// Filter Sidebar Component
const FilterSidebar = () => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-5">Filtrlar</h3>
    <div className="mb-5 pb-5 border-b border-gray-100">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Kategoriya</h4>
      {[
        { id: 'electronics', label: 'Elektronika (120)' },
        { id: 'clothing', label: 'Kiyim (85)' },
        { id: 'home', label: 'Uy-ro\'zg\'or (65)' }
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center gap-2 mb-2">
          <input type="checkbox" id={id} className="accent-blue-500" />
          <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">{label}</label>
        </div>
      ))}
    </div>
    <div className="mb-5 pb-5 border-b border-gray-100">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Narx oralig'i</h4>
      <div className="flex items-center gap-2">
        <input type="number" placeholder="Dan" className="flex-1 p-2 border border-gray-200 rounded-lg text-sm" />
        <span>-</span>
        <input type="number" placeholder="Gacha" className="flex-1 p-2 border border-gray-200 rounded-lg text-sm" />
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Brend</h4>
      {['Samsung', 'Apple', 'Xiaomi'].map(brand => (
        <div key={brand} className="flex items-center gap-2 mb-2">
          <input type="checkbox" id={brand.toLowerCase()} className="accent-blue-500" />
          <label htmlFor={brand.toLowerCase()} className="text-sm text-gray-600 cursor-pointer">{brand}</label>
        </div>
      ))}
    </div>
  </div>
);

// Main App Component
const App = () => (
  <div className="max-w-7xl mx-auto p-5 font-sans bg-gray-100 text-gray-800">
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-gray-800 to-blue-500 text-white p-10 rounded-3xl text-center mb-10">
      <h1 className="text-5xl font-light mb-4">MOZEN UI Design System</h1>
      <p className="text-xl opacity-90">Modern, Clean va User-Friendly Interface</p>
    </div>

    {/* Header & Navigation */}
    <div className="bg-white rounded-2xl p-10 mb-8 shadow-sm">
      <h2 className="text-3xl text-gray-800 mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-gray-800 after:rounded">
        🎯 Header & Navigation
      </h2>
      <HeaderDemo />
      <p className="text-gray-600 mt-4">
        <strong>Xususiyatlar:</strong> Minimalist design, qidiruv funksiyasi, savat counter, responsive layout
      </p>
    </div>

    {/* Product Cards */}
    <div className="bg-white rounded-2xl p-10 mb-8 shadow-sm">
      <h2 className="text-3xl text-gray-800 mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-gray-800 after:rounded">
        🛍 Product Cards Design
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          title="Premium Bluetooth Naushnik"
          price="150,000 so'm"
          oldPrice="210,000 so'm"
          discount="-30%"
          rating="★★★★☆"
          reviews="124"
          badge="-30%"
        />
        <ProductCard
          title="Zamonaviy Smartfon"
          price="2,500,000 so'm"
          rating="★★★★★"
          reviews="89"
        />
      </div>
    </div>

    {/* Filter & Search */}
    <div className="bg-white rounded-2xl p-10 mb-8 shadow-sm">
      <h2 className="text-3xl text-gray-800 mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-gray-800 after:rounded">
        🔍 Filter & Search Design
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <FilterSidebar />
        <div className="bg-gray-100 p-5 rounded-xl flex items-center justify-center text-gray-600 h-64">
          Bu yerda mahsulotlar ro'yxati bo'ladi
        </div>
      </div>
    </div>   
  </div>
);

export default App;