import type { Localized } from './profile';

export interface Publication {
  id: string; title: string; authors: string[]; year: number; type: 'journal' | 'conference';
  venue: string; shortVenue: string; detail: string; doi: string; summary: Localized;
  bibtex: string; source: string; figure: 'compare' | 'surrogate' | 'embedding';
  // Local image URL under public/; omit it to use the built-in concept diagram.
  image?: string;
  method: string; keywords: Localized[];
  notes: { question: Localized; method: Localized; contribution: Localized };
}

export const publications: Publication[] = [
  {
    id: 'gec-imc',
    image: '/assets/papers/gec-imc.svg',
    title: 'Graph Embedding Comparator for Evolutionary Neural Architecture Search with Isomorphic Multi-Comparison',
    authors: ['Xiaolei Zhang', 'Yu Xue', 'Ferrante Neri'], year: 2026, type: 'journal',
    venue: 'International Journal of Neural Systems', shortVenue: 'IJNS', detail: '36(5), 2650009',
    doi: '10.1142/S0129065726500097', figure: 'compare',
    source: 'https://pubmed.ncbi.nlm.nih.gov/41582094/',
    method: 'GEC-IMC',
    keywords: [
      { zh: '图嵌入', en: 'Graph embeddings' },
      { zh: '对比学习', en: 'Contrastive learning' },
      { zh: '同构多比较', en: 'Isomorphic multi-comparison' },
    ],
    notes: {
      question: { zh: '如何在学习架构表示的基础上，为演化选择提供更稳健的性能排序？', en: 'How can learned architecture representations support more robust rankings for evolutionary selection?' },
      method: { zh: '结合图卷积、对比学习与嵌入比较器，并对架构的多个结构等价变体进行成对比较。', en: 'Combine graph convolutions, contrastive learning, and an embedding comparator; compare multiple structurally equivalent variants of each architecture.' },
      contribution: { zh: '将同构变体的比较结果汇总为排序得分，为演化选择提供反馈。', en: 'Aggregate comparisons across isomorphic variants into a ranking score that guides evolutionary selection.' },
    },
    summary: { zh: '结合图嵌入比较器与同构多比较机制，为演化架构搜索提供相对性能排序。', en: 'Graph embedding comparison and isomorphic multi-comparison provide relative performance rankings for evolutionary architecture search.' },
    bibtex: '@article{zhang2026gecimc,\n  author = {Zhang, Xiaolei and Xue, Yu and Neri, Ferrante},\n  title = {Graph Embedding Comparator for Evolutionary Neural Architecture Search with Isomorphic Multi-Comparison},\n  journal = {International Journal of Neural Systems},\n  year = {2026},\n  volume = {36},\n  number = {5},\n  pages = {2650009},\n  doi = {10.1142/S0129065726500097}\n}',
  },
  {
    id: 'dsgenas',
    image: '/assets/papers/dsgenas.svg',
    title: 'Graph Neural Network-Based Surrogate Model for Evolutionary Neural Architecture Search',
    authors: ['Yu Xue', 'Xiaolei Zhang', 'Ferrante Neri', 'Bing Xue', 'Mengjie Zhang'], year: 2025, type: 'journal',
    venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems', shortVenue: 'IEEE TSMC', detail: '55(12), 9631–9644',
    doi: '10.1109/TSMC.2025.3621488', figure: 'surrogate',
    source: 'https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Graph-Neural-Network-Based-Surrogate-Model-for/991052659102346',
    method: 'DSGENAS',
    keywords: [
      { zh: '图神经网络', en: 'Graph neural networks' },
      { zh: '双阶段代理模型', en: 'Dual-stage surrogates' },
      { zh: '性能层级', en: 'Performance tiers' },
    ],
    notes: {
      question: { zh: '如何结合架构结构信息与不同尺度的性能关系，辅助计算开销较高的架构搜索？', en: 'How can architecture structure and performance relationships at different scales inform costly architecture search?' },
      method: { zh: '用图神经网络提取架构特征，再由两个代理模型分别学习全局性能层级和局部性能关系。', en: 'Extract architecture features with a GNN, then use two surrogate models to learn global performance tiers and local performance relationships.' },
      contribution: { zh: '将两种评估信号共同纳入演化搜索，形成双阶段代理辅助框架。', en: 'Bring both evaluation signals into evolutionary search through a dual-stage surrogate framework.' },
    },
    summary: { zh: '以图神经网络学习架构表示，结合全局性能层级与局部性能关系的双阶段代理模型辅助搜索。', en: 'GNN-based architecture representations support a dual-stage surrogate combining global performance tiers with local performance relationships.' },
    bibtex: '@article{xue2025dsgenas,\n  author = {Xue, Yu and Zhang, Xiaolei and Neri, Ferrante and Xue, Bing and Zhang, Mengjie},\n  title = {Graph Neural Network-Based Surrogate Model for Evolutionary Neural Architecture Search},\n  journal = {IEEE Transactions on Systems, Man, and Cybernetics: Systems},\n  year = {2025},\n  volume = {55},\n  number = {12},\n  pages = {9631--9644},\n  doi = {10.1109/TSMC.2025.3621488}\n}',
  },
  {
    id: 'emcenas',
    image: '/assets/papers/emcenas.svg',
    title: 'Embedding Comparator for Evolutionary Neural Architecture Search via Contrastive Learning',
    authors: ['Xiaolei Zhang', 'Yu Xue', 'Ferrante Neri'], year: 2025, type: 'conference',
    venue: 'IEEE Congress on Evolutionary Computation', shortVenue: 'IEEE CEC', detail: 'Hangzhou, China · 1–8',
    doi: '10.1109/CEC65147.2025.11043127', figure: 'embedding',
    source: 'https://openresearch.surrey.ac.uk/esploro/outputs/conferenceProceeding/Embedding-Comparator-for-Evolutionary-Neural-Architecture/991111774402346',
    method: 'EmCENAS',
    keywords: [
      { zh: '图卷积', en: 'Graph convolutions' },
      { zh: '对比学习', en: 'Contrastive learning' },
      { zh: '成对比较', en: 'Pairwise comparison' },
    ],
    notes: {
      question: { zh: '如何让架构表示反映性能差异，并用于判断两个候选网络的相对优劣？', en: 'How can architecture representations capture performance differences and compare two candidate networks?' },
      method: { zh: '以图卷积提取特征，用对比学习调整嵌入空间，使性能相近的架构具有更接近的表示。', en: 'Use graph convolutions for features and contrastive learning to bring architectures with similar performance closer in the embedding space.' },
      contribution: { zh: '基于学习到的嵌入构建比较器，预测架构之间的相对性能关系，为演化搜索提供判断依据。', en: 'Build a comparator on the learned embeddings to predict relative performance and inform evolutionary search.' },
    },
    summary: { zh: '通过图卷积与对比学习构建架构嵌入空间，学习候选网络之间的相对性能关系。', en: 'Graph convolutions and contrastive learning form an embedding space for comparing the relative performance of candidate architectures.' },
    bibtex: '@inproceedings{zhang2025emcenas,\n  author = {Zhang, Xiaolei and Xue, Yu and Neri, Ferrante},\n  title = {Embedding Comparator for Evolutionary Neural Architecture Search via Contrastive Learning},\n  booktitle = {2025 IEEE Congress on Evolutionary Computation (CEC)},\n  year = {2025},\n  pages = {1--8},\n  doi = {10.1109/CEC65147.2025.11043127}\n}',
  },
];

export function publicationSearchText(paper: Publication): string {
  const localized = [paper.summary, ...paper.keywords, ...Object.values(paper.notes)];
  return [paper.title, paper.method, ...paper.authors, paper.venue, paper.shortVenue,
    paper.doi, ...localized.flatMap(value => [value.zh, value.en])].join(' ').toLocaleLowerCase();
}

export function researchPublications(paperIds: string[]): Publication[] {
  return publications.filter(paper => paperIds.includes(paper.id) && Boolean(paper.image));
}
