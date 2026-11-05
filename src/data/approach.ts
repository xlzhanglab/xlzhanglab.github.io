import type { Localized } from './profile';

// A reading guide to the shared research theme, rather than a new algorithm.
export const researchFocus: Localized = {
  zh: '在有限计算预算下，如何用更有效的架构表示与性能反馈，找到值得训练的神经网络？',
  en: 'With a limited compute budget, how can architecture representations and performance feedback help identify networks worth training?',
};

export const researchPath: {
  id: string; number: string; section: string;
  title: Localized; short: Localized; description: Localized;
}[] = [
  {
    id: 'represent', number: '01', section: 'representation',
    title: { zh: '表示架构', en: 'Represent architectures' },
    short: { zh: '从网络结构中学习图嵌入。', en: 'Learn graph embeddings from network structure.' },
    description: {
      zh: '将网络结构编码为图，让模型学习架构特征；结合对比学习，使嵌入空间反映架构之间的性能关系。',
      en: 'Encode network structure as a graph and learn architecture features. Contrastive learning connects these embeddings to relationships in performance.',
    },
  },
  {
    id: 'evaluate', number: '02', section: 'efficient-nas',
    title: { zh: '学习评估', en: 'Learn to evaluate' },
    short: { zh: '学习性能层级与相对优劣。', en: 'Learn performance tiers and relative quality.' },
    description: {
      zh: '以代理模型或比较器评估候选架构，分别探索全局性能层级、局部成对关系与多次比较的聚合。',
      en: 'Evaluate candidates with surrogate models or comparators, exploring global performance tiers, local pairwise relationships, and aggregated comparisons.',
    },
  },
  {
    id: 'search', number: '03', section: 'optimization',
    title: { zh: '引导演化', en: 'Guide evolution' },
    short: { zh: '用评估反馈支持候选选择。', en: 'Use evaluation feedback to select candidates.' },
    description: {
      zh: '将评估结果用于演化搜索中的候选选择，围绕有限预算下的搜索效率展开研究，并关注性能与计算开销之间的权衡。',
      en: 'Use evaluation feedback for candidate selection in evolutionary search. The broader research interest is efficient search and trade-offs between performance and compute.',
    },
  },
];
