import fs from 'fs'
import glob from 'glob'

// 遍历, 检查有哪些包可以发布 (dist is exists and package.json is exists)

// 加载缓存, 看已发布版本与版本版本是否一致, 不一致发布, 一致跳过
