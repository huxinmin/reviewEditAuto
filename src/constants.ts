export const TABLE_HEAD = ['严重程度', '问题描述', '位置'];
export const INFO_COLOR = '#c0ffb3';
export const WARNING_BG_COLOR = '#f75f00';
export const WARNING_COLOR = '#f7e8f6';

export const SEVERITY = {
  low: '低',
  normal: '一般',
  warning: '警告',
  error: '严重',
};

/**
 * 默认扫描扩展
 */
export const EXTENSIONS = '**/*.?(js|ts|jsx|tsx)';

/**
 * 默认忽略文件夹
 */
export const DEFAULT_IGNORE_PATTERNS = [
  'node_modules/**',
  'build/**',
  'dist/**',
  'output/**',
];

/**
 * ignore文件名
 */
export const IGNORE_FILE_NAME = '.gitignore';

/**
 * 提取函数类型正则
 */
export const REG_FUNC_TYPE =
  /^(Method |Async function |Arrow function |Function )/g;

/**
 * eslint提示前缀
 */
export const MESSAGE_PREFIX = 'Maximum allowed is 1.';

/**
 * eslint提示后缀
 */
export const MESSAGE_SUFFIX = 'has a complexity of ';
