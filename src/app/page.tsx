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

// 字体类型选项
const fontOptions = [
  { value: 'font-sans', label: '无衬线' },
  { value: 'font-serif', label: '衬线' },
  { value: 'font-mono', label: '等宽' },
];

// 字体大小选项
const fontSizeOptions = [
  { value: 'text-base', label: '默认' },
  { value: 'text-lg', label: '大' },
  { value: 'text-xl', label: '特大' },
  { value: 'text-2xl', label: '超大' },
  { value: 'text-3xl', label: '极大' },
];

export default function Home() {
  // 一言数据状态
  const [hitokoto, setHitokoto] = useState<HitokotoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  
  // 配置状态
  const [selectedType, setSelectedType] = useState('');
  const [textColor, setTextColor] = useState('#1a202c');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [fontSize, setFontSize] = useState('text-xl');
  const [borderRadius, setBorderRadius] = useState('12');
  const [borderColor, setBorderColor] = useState('#e2e8f0');
  const [shadowColor, setShadowColor] = useState('#cbd5e0');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
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
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* 主题切换按钮 */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
        aria-label="切换主题"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* 一言展示区域 */}
          <div className="mb-8">
            <div 
              className={`p-8 rounded-${borderRadius} border ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300`}
              style={{
                borderColor: borderColor,
                boxShadow: `0 10px 15px -3px ${shadowColor}80, 0 4px 6px -2px ${shadowColor}40`,
              }}
            >
              {loading ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  加载中...
                </div>
              ) : hitokoto ? (
                <div className="text-center">
                  <p 
                    className={`${fontFamily} ${fontSize} font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500`}
                    style={{ color: textColor }}
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
          
          {/* 配置面板 */}
          <div className={`p-6 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md`}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">样式配置</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 字体配置 */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">字体设置</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">字体颜色</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">字体类型</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
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
                    onChange={(e) => setFontSize(e.target.value)}
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
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">外框设置</h3>
                
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
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">一言设置</h3>
                
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
