'use client';

import { useState, useEffect } from 'react';

// Hitokoto API 接口类型定义
interface HitokotoResponse {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who?: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

// 一言类型选项
const hitokotoTypes = [
  { value: '', label: '全部' },
  { value: 'a', label: '动画' },
  { value: 'b', label: '漫画' },
  { value: 'c', label: '游戏' },
  { value: 'd', label: '文学' },
  { value: 'e', label: '原创' },
  { value: 'f', label: '网络' },
  { value: 'g', label: '其他' },
  { value: 'h', label: '影视' },
  { value: 'i', label: '诗词' },
  { value: 'j', label: '网易云' },
  { value: 'k', label: '哲学' },
  { value: 'l', label: '抖机灵' },
];

// 字体类型选项 - 新增中文字体
const fontOptions = [
  { value: 'font-sans', label: '无衬线', fontFamily: 'sans-serif' },
  { value: 'font-serif', label: '衬线', fontFamily: 'serif' },
  { value: 'font-mono', label: '等宽', fontFamily: 'monospace' },
  { value: 'msyh', label: '微软雅黑', fontFamily: '"Microsoft YaHei", sans-serif' },
  { value: 'simhei', label: '黑体', fontFamily: '"SimHei", sans-serif' },
  { value: 'simsun', label: '宋体', fontFamily: '"SimSun", serif' },
  { value: 'fangsong', label: '仿宋', fontFamily: '"FangSong", serif' },
];

// 字体大小选项
const fontSizeOptions = [
  { value: 'text-base', label: '默认', fontSize: '1rem' },
  { value: 'text-lg', label: '大', fontSize: '1.125rem' },
  { value: 'text-xl', label: '特大', fontSize: '1.25rem' },
  { value: 'text-2xl', label: '超大', fontSize: '1.5rem' },
  { value: 'text-3xl', label: '极大', fontSize: '1.875rem' },
  { value: 'text-4xl', label: '巨无霸', fontSize: '2.25rem' },
  { value: 'text-5xl', label: '超级巨无霸', fontSize: '3rem' },
  { value: 'text-6xl', label: '超超级巨无霸', fontSize: '4rem' },
];



// 渐变颜色选项
const gradientOptions = [
  { value: 'purple-blue', label: '紫蓝渐变', className: 'bg-gradient-to-r from-purple-500 to-blue-500' },
  { value: 'pink-purple', label: '粉紫渐变', className: 'bg-gradient-to-r from-pink-500 to-purple-500' },
  { value: 'orange-pink', label: '橙粉渐变', className: 'bg-gradient-to-r from-orange-500 to-pink-500' },
  { value: 'green-teal', label: '绿青渐变', className: 'bg-gradient-to-r from-green-500 to-teal-500' },
  { value: 'blue-cyan', label: '蓝青渐变', className: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  { value: 'red-orange', label: '红橙渐变', className: 'bg-gradient-to-r from-red-500 to-orange-500' },
  { value: 'indigo-purple', label: '靛紫渐变', className: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
  { value: 'teal-blue', label: '青蓝渐变', className: 'bg-gradient-to-r from-teal-500 to-blue-500' },
];


export default function Home() {
  // 一言数据状态
  const [hitokoto, setHitokoto] = useState<HitokotoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  
  // 配置状态
  const [selectedType, setSelectedType] = useState('');
  const [gradient, setGradient] = useState('purple-blue');
  const [selectedGradient, setSelectedGradient] = useState('bg-gradient-to-r from-purple-500 to-blue-500');
  const [fontFamily, setFontFamily] = useState('msyh');
  const [fontFamilyValue, setFontFamilyValue] = useState('"Microsoft YaHei", sans-serif');
  const [fontSize, setFontSize] = useState('text-4xl');
  const [fontSizeValue, setFontSizeValue] = useState('2.25rem');

  const [borderRadius, setBorderRadius] = useState('12');
  const [borderColor, setBorderColor] = useState('#e2e8f0');
  const [shadowColor, setShadowColor] = useState('#cbd5e0');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 新增：设置面板显示状态
  const [showSettings, setShowSettings] = useState(false);
  
  // 获取一言数据
  const fetchHitokoto = async () => {
    setLoading(true);
    try {
      const url = selectedType ? 
        `https://v1.hitokoto.cn?type=${selectedType}` : 
        'https://v1.hitokoto.cn';
      const response = await fetch(url);
      const data = await response.json();
      setHitokoto(data);
    } catch (error) {
      console.error('获取一言失败:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // 初始加载和类型变化时获取一言
  useEffect(() => {
    fetchHitokoto();
    // 检查系统深色模式
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [selectedType]);
  
  // 切换主题
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // 切换设置面板显示
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  
  // 关闭设置面板
  const closeSettings = () => {
    setShowSettings(false);
  };
  
  // 字体变化处理
  const handleFontFamilyChange = (value: string) => {
    const selectedFont = fontOptions.find(font => font.value === value);
    if (selectedFont) {
      setFontFamily(value);
      setFontFamilyValue(selectedFont.fontFamily);
    }
  };
  
  // 字体大小变化处理
  const handleFontSizeChange = (value: string) => {
    const selectedSize = fontSizeOptions.find(size => size.value === value);
    if (selectedSize) {
      setFontSize(value);
      setFontSizeValue(selectedSize.fontSize);
    }
  };

  // 渐变颜色变化处理
  const handleGradientChange = (value: string) => {
    const selectedGrad = gradientOptions.find(grad => grad.value === value);
    if (selectedGrad) {
      setGradient(value);
      setSelectedGradient(selectedGrad.className);
    }
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* 背景动效 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob`}></div>
        <div className={`absolute -top-20 -right-20 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000`}></div>
        <div className={`absolute bottom-20 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000`}></div>
      </div>
      
      {/* 顶部按钮区域 */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        {/* 主题切换按钮 */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:shadow-lg transition-all backdrop-blur-sm"
          aria-label="切换主题"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        
        {/* 设置按钮 */}
        <button
          onClick={toggleSettings}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:shadow-lg transition-all backdrop-blur-sm"
          aria-label="设置"
        >
          ⚙️
        </button>
      </div>
      
      {/* 主内容区域 */}
      <main className="flex-1 flex items-center justify-center">
        {/* 一言展示区域 - 始终显示 */}
        <div className={`flex items-center justify-center ${showSettings ? 'w-[80%]' : 'w-full'}`}>
          <div 
            className={`p-12 border ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} shadow-lg transition-all duration-300 backdrop-blur-sm mx-auto`}
            style={{
              borderRadius: `${borderRadius}px`,
              borderColor: borderColor,
              boxShadow: `0 10px 15px -3px ${shadowColor}80, 0 4px 6px -2px ${shadowColor}40`,
              width: '75vw',
              height: '35vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
              {loading ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  加载中...
                </div>
              ) : hitokoto ? (
                <div className="text-center">
                  <p 
                    className={`font-semibold mb-4 bg-clip-text text-transparent ${selectedGradient}`}
                    style={{ 
                      fontFamily: fontFamilyValue,
                      fontSize: fontSizeValue
                    }}
                  >
                    "{hitokoto.hitokoto}"
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    — {hitokoto.from_who || hitokoto.from}
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  获取一言失败
                </div>
              )}
            </div>
        </div>
        
        {/* 设置面板 - 条件显示 */}
        {showSettings && (
          <div className="flex-1 p-4 max-w-[20%]">
            <div className={`p-6 rounded-lg border ${isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'} shadow-md backdrop-blur-sm text-sm`} style={{fontFamily: '"Microsoft YaHei", sans-serif'}}>
              {/* 设置面板标题和关闭按钮 */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">样式配置</h2>
                <button
                  onClick={closeSettings}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="关闭设置"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 字体配置 */}
                <div>
                  <h3 className="text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">字体设置</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">字体渐变</label>
                    <select
                      value={gradient}
                      onChange={(e) => handleGradientChange(e.target.value)}
                      className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                    >
                      {gradientOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">字体类型</label>
                    <select
                      value={fontFamily}
                      onChange={(e) => handleFontFamilyChange(e.target.value)}
                      className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                    >
                      {fontOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">字体大小</label>
                    <select
                      value={fontSize}
                      onChange={(e) => handleFontSizeChange(e.target.value)}
                      className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                    >
                      {fontSizeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* 外框配置 */}
                <div>
                  <h3 className="text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">外框设置</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">圆角大小</label>
                    <input
                      type="range"
                      min="0"
                      max="32"
                      value={borderRadius}
                      onChange={(e) => setBorderRadius(e.target.value)}
                      className="w-full"
                    />
                    <div className="text-sm text-center text-gray-500 dark:text-gray-400 mt-1">
                      {borderRadius}px
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">边框颜色</label>
                    <input
                      type="color"
                      value={borderColor}
                      onChange={(e) => setBorderColor(e.target.value)}
                      className="w-full h-10 rounded cursor-pointer"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">阴影颜色</label>
                    <input
                      type="color"
                      value={shadowColor}
                      onChange={(e) => setShadowColor(e.target.value)}
                      className="w-full h-10 rounded cursor-pointer"
                    />
                  </div>
                </div>
                
                {/* 一言配置 */}
                <div className="md:col-span-2">
                  <h3 className="text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">一言设置</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">类别</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                    >
                      {hitokotoTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={fetchHitokoto}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    刷新一言
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* 项目信息 */}
      <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center items-center gap-2">
          <span>{process.env.NEXT_PUBLIC_PROJECT_NAME || 'Hitokoto App'}</span>
          <span>•</span>
          <span>版本 {process.env.NEXT_PUBLIC_VERSION || '1.0.0'}</span>
          <span>•</span>
          <span>作者 {process.env.NEXT_PUBLIC_AUTHOR || 'Unknown'}</span>
        </div>
      </footer>
    </div>
  );
}
