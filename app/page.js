'use client';
import React, { useState } from 'react';
import { Scroll, Book, Users, Clock, Phone, Heart, Target, Star, Award, Building, Menu, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const YeshivaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation - Desktop */}
      <nav className="hidden lg:block bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8 space-x-reverse">
              <a href="#about" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">אודות</a>
              <a href="#gallery" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">גלריה</a>
              <a href="#endorsements" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">הסמכות</a>
              <a href="#development" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">התפתחות</a>
              <a href="#registration" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">הרשמה</a>
              <a href="#donate" className="text-gray-900 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">תרומות</a>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="tel:+972000000000" className="flex items-center text-gray-900 hover:text-green-600">
                <Phone className="h-5 w-5 ml-2" />
                <span className="font-medium">צור קשר</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="font-bold text-gray-900 text-lg">ישיבת אש התלמוד</span>
        </div>
        
        {isMenuOpen && (
          <nav className="bg-white border-t">
            <ul className="text-right px-4 py-2 space-y-1">
              <li>
                <a href="#about" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  אודות
                </a>
              </li>
              <li>
                <a href="#gallery" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  גלריה
                </a>
              </li>
              <li>
                <a href="#endorsements" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  הסמכות
                </a>
              </li>
              <li>
                <a href="#development" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  התפתחות
                </a>
              </li>
              <li>
                <a href="#registration" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  הרשמה
                </a>
              </li>
              <li>
                <a href="#donate" className="block py-2 px-4 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  תרומות
                </a>
              </li>
              <li className="border-t pt-2 mt-2">
                <a href="tel:+972000000000" className="flex items-center px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-700 rounded">
                  <Phone className="h-5 w-5 ml-2" />
                  <span>צור קשר</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-0 bg-white rounded-full p-1 shrink-0">
              <img src="/images/logo.png" alt="לוגו הישיבה" className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-right flex-grow md:mx-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">ישיבת אש התלמוד</h1>
              <p className="text-xl md:text-2xl text-gray-100">מקום לצמיחה רוחנית לבעלי תשובה ובוגרי צבא</p>
            </div>
            <div className="hidden md:block w-32"></div>
          </div>
        </div>
      </header>

      {/* Video Section */}
      {/* Video Section */}
<section className="bg-gray-900 py-12 md:py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="relative pb-56 rounded-xl overflow-hidden">
        <iframe 
          src="images/rav.mp4"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">החיים בישיבה</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="relative group">
              <img 
                src="/images/yeshiva1.jpg" 
                alt="לימוד בבית המדרש" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl"></div>
              <div className="absolute bottom-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold">לימוד בבית המדרש</h3>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="relative group">
              <img 
                src="/images/nac.png" 
                alt="שיעור כללי" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl"></div>
              <div className="absolute bottom-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold">שיעור כללי</h3>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="relative group">
              <img 
                src="/images/.jpg" 
                alt="תפילה" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl"></div>
              <div className="absolute bottom-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold">תפילה</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section id="endorsements" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">הסמכות והמלצות מגדולי ישראל</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <Award className="w-16 h-16 mx-auto mb-6 text-green-700" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">מרן הרב עובדיה יוסף זצ"ל</h3>
              <img 
                src="/images/bes.jpg" 
                alt="מכתב המלצה מהרב עובדיה יוסף" 
                className="mx-auto mb-6 rounded-lg shadow-md max-w-full h-auto"
              />
              <p className="text-right text-gray-800 leading-relaxed">
                "ישיבת אש התלמוד מהווה מגדלור של תורה לבעלי תשובה, ומחזירה עטרה ליושנה..."
              </p>
            </div>
            {/* ניתן להוסיף עוד המלצות כאן */}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section id="development" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">תהליך הבנייה וההתפתחות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* שלב 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/construction1.jpg" 
                alt="תחילת הבנייה" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">שלב א׳ - הנחת היסודות</h3>
                <p className="text-gray-700">תיאור קצר של שלב הבנייה הראשון והאתגרים שעמדו בפנינו</p>
              </div>
            </div>
            
            {/* שלב 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/construction2.jpg" 
                alt="בנייה בעיצומה" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">שלב ב׳ - בניית הקומות</h3>
                <p className="text-gray-700">תיאור התקדמות הבנייה והתפתחות המבנה</p>
              </div>
            </div>
            
            {/* שלב 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/construction3.jpg" 
                alt="גמר בנייה" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">שלב ג׳ - השלמת הבנייה</h3>
                <p className="text-gray-700">סיום עבודות הבנייה והכנת המבנה לקליטת התלמידים</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">טופס הרשמה</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-900">שם מלא</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-900">טלפון</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-900">אימייל</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-900">הערות</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                שליחה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      {/* Donation Section */}
<section id="donate" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-green-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">שותפות בהחזקת התורה</h2>
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
          <h3 className="font-bold mb-2 text-gray-900">שותף יומי</h3>
          <p className="text-2xl font-bold text-green-700">₪180</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
          <h3 className="font-bold mb-2 text-gray-900">שותף חודשי</h3>
          <p className="text-2xl font-bold text-green-700">₪1,000</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
          <h3 className="font-bold mb-2 text-gray-900">שותף שנתי</h3>
          <p className="text-2xl font-bold text-green-700">₪10,000</p>
        </div>
      </div>
      <a 
        href="https://www.matara.pro/nedarimplus/online/?mosad=7009786"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
      >
        לתרומה
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-gray-900 text-gray-100 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-center md:text-right">
        <h3 className="text-lg font-bold mb-4">צור קשר</h3>
        <p className="mb-2">טלפון: 000-0000000</p>
        <p>כתובת: רחוב הישיבה 1, ירושלים</p>
      </div>
      <div className="text-center md:text-right">
        <h3 className="text-lg font-bold mb-4">שעות פעילות</h3>
        <p className="mb-2">ימים א'-ה': 08:00-22:00</p>
        <p>יום ו': 08:00-13:00</p>
      </div>
    </div>
    <div className="text-center mt-8 pt-8 border-t border-gray-800">
      <p>© כל הזכויות שמורות לישיבת אש התלמוד</p>
    </div>
  </div>
</footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/972000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="צור קשר בוואטסאפ"
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default YeshivaWebsite;