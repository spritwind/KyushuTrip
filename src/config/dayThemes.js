// 馬卡龍配色主題 - 每天一種柔和的粉彩色調
// Macaron Color Themes - One soft pastel palette per day

export const DAY_THEMES = {
  // Day 1: 玫瑰粉 Rose Pink - 福岡抵達
  1: {
    name: 'rose',
    primary: '#F8A5C2',      // 主色
    primaryLight: '#FDEAF0', // 淺色背景
    primaryDark: '#E56B96',  // 深色強調
    gradient: 'from-rose-200 to-pink-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(248, 165, 194, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(253, 234, 240, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(248, 165, 194, 0.3)',
    accent: 'rose'
  },

  // Day 2: 薄荷綠 Mint Green - 別府地獄巡禮
  2: {
    name: 'mint',
    primary: '#7FDBDA',
    primaryLight: '#E8F8F5',
    primaryDark: '#4ECDC4',
    gradient: 'from-teal-200 to-emerald-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(127, 219, 218, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(232, 248, 245, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(127, 219, 218, 0.3)',
    accent: 'teal'
  },

  // Day 3: 薰衣草紫 Lavender - 由布院金鱗湖
  3: {
    name: 'lavender',
    primary: '#C3AED6',
    primaryLight: '#F3EFFA',
    primaryDark: '#9B7DC2',
    gradient: 'from-purple-200 to-violet-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(195, 174, 214, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(243, 239, 250, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(195, 174, 214, 0.3)',
    accent: 'violet'
  },

  // Day 4: 檸檬黃 Lemon Yellow - 阿蘇大觀峰
  4: {
    name: 'lemon',
    primary: '#F9E79F',
    primaryLight: '#FEF9E7',
    primaryDark: '#F4D03F',
    gradient: 'from-yellow-200 to-amber-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(249, 231, 159, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(254, 249, 231, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(249, 231, 159, 0.3)',
    accent: 'amber'
  },

  // Day 5: 天空藍 Sky Blue - 阿蘇草千里
  5: {
    name: 'sky',
    primary: '#AED6F1',
    primaryLight: '#EBF5FB',
    primaryDark: '#5DADE2',
    gradient: 'from-sky-200 to-blue-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(174, 214, 241, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(235, 245, 251, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(174, 214, 241, 0.3)',
    accent: 'sky'
  },

  // Day 6: 珊瑚橘 Coral Orange - 福岡天神
  6: {
    name: 'coral',
    primary: '#F5B7B1',
    primaryLight: '#FDEDEC',
    primaryDark: '#EC7063',
    gradient: 'from-orange-200 to-red-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(245, 183, 177, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(253, 237, 236, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(245, 183, 177, 0.3)',
    accent: 'orange'
  },

  // Day 7: 抹茶綠 Matcha Green - 福岡鋼彈
  7: {
    name: 'matcha',
    primary: '#ABEBC6',
    primaryLight: '#EAFAF1',
    primaryDark: '#58D68D',
    gradient: 'from-green-200 to-emerald-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(171, 235, 198, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(234, 250, 241, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(171, 235, 198, 0.3)',
    accent: 'emerald'
  },

  // Day 8: 桃子粉 Peach - 福岡返程
  8: {
    name: 'peach',
    primary: '#FAD7A0',
    primaryLight: '#FEF5E7',
    primaryDark: '#F5B041',
    gradient: 'from-orange-100 to-yellow-100',
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(250, 215, 160, 0.25) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(254, 245, 231, 0.35) 0%, transparent 25%)',
    shadow: '0 4px 14px 0 rgba(250, 215, 160, 0.3)',
    accent: 'orange'
  }
};

// 獲取當前日期的主題
export const getThemeByDay = (dayId) => {
  return DAY_THEMES[dayId] || DAY_THEMES[1];
};

// Tailwind 動態類名映射
export const THEME_CLASSES = {
  rose: {
    bg: 'bg-rose-400',
    bgLight: 'bg-rose-50',
    bgMedium: 'bg-rose-100',
    text: 'text-rose-600',
    textDark: 'text-rose-700',
    border: 'border-rose-200',
    borderActive: 'border-rose-400',
    hover: 'hover:bg-rose-500',
    ring: 'ring-rose-300',
    gradient: 'from-rose-400 to-pink-300'
  },
  mint: {
    bg: 'bg-teal-400',
    bgLight: 'bg-teal-50',
    bgMedium: 'bg-teal-100',
    text: 'text-teal-600',
    textDark: 'text-teal-700',
    border: 'border-teal-200',
    borderActive: 'border-teal-400',
    hover: 'hover:bg-teal-500',
    ring: 'ring-teal-300',
    gradient: 'from-teal-400 to-emerald-300'
  },
  lavender: {
    bg: 'bg-violet-400',
    bgLight: 'bg-violet-50',
    bgMedium: 'bg-violet-100',
    text: 'text-violet-600',
    textDark: 'text-violet-700',
    border: 'border-violet-200',
    borderActive: 'border-violet-400',
    hover: 'hover:bg-violet-500',
    ring: 'ring-violet-300',
    gradient: 'from-violet-400 to-purple-300'
  },
  lemon: {
    bg: 'bg-amber-400',
    bgLight: 'bg-amber-50',
    bgMedium: 'bg-amber-100',
    text: 'text-amber-600',
    textDark: 'text-amber-700',
    border: 'border-amber-200',
    borderActive: 'border-amber-400',
    hover: 'hover:bg-amber-500',
    ring: 'ring-amber-300',
    gradient: 'from-amber-400 to-yellow-300'
  },
  sky: {
    bg: 'bg-sky-400',
    bgLight: 'bg-sky-50',
    bgMedium: 'bg-sky-100',
    text: 'text-sky-600',
    textDark: 'text-sky-700',
    border: 'border-sky-200',
    borderActive: 'border-sky-400',
    hover: 'hover:bg-sky-500',
    ring: 'ring-sky-300',
    gradient: 'from-sky-400 to-blue-300'
  },
  coral: {
    bg: 'bg-orange-400',
    bgLight: 'bg-orange-50',
    bgMedium: 'bg-orange-100',
    text: 'text-orange-600',
    textDark: 'text-orange-700',
    border: 'border-orange-200',
    borderActive: 'border-orange-400',
    hover: 'hover:bg-orange-500',
    ring: 'ring-orange-300',
    gradient: 'from-orange-400 to-red-300'
  },
  matcha: {
    bg: 'bg-emerald-400',
    bgLight: 'bg-emerald-50',
    bgMedium: 'bg-emerald-100',
    text: 'text-emerald-600',
    textDark: 'text-emerald-700',
    border: 'border-emerald-200',
    borderActive: 'border-emerald-400',
    hover: 'hover:bg-emerald-500',
    ring: 'ring-emerald-300',
    gradient: 'from-emerald-400 to-green-300'
  },
  peach: {
    bg: 'bg-orange-300',
    bgLight: 'bg-orange-50',
    bgMedium: 'bg-orange-100',
    text: 'text-orange-500',
    textDark: 'text-orange-600',
    border: 'border-orange-200',
    borderActive: 'border-orange-300',
    hover: 'hover:bg-orange-400',
    ring: 'ring-orange-200',
    gradient: 'from-orange-300 to-amber-200'
  }
};

// 獲取主題的 Tailwind 類名
export const getThemeClasses = (dayId) => {
  const theme = getThemeByDay(dayId);
  return THEME_CLASSES[theme.name] || THEME_CLASSES.rose;
};
