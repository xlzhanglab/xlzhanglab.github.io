export type Language = 'zh' | 'en';
export type Localized = Record<Language, string>;
export const local = (value: Localized, lang: Language) => value[lang];
export const languages: Language[] = ['zh', 'en'];
export const site = {
  origin: 'https://xlzhanglab.github.io',
  updated: '2026-11-04',
  email: 'xlzhanglab@163.com',
  github: 'https://github.com/xlzhanglab',
  scholar: 'https://scholar.google.com/citations?user=z6qsVOoAAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0007-4572-1548',
  name: { zh: '张晓磊', en: 'Xiaolei Zhang' },
  role: { zh: '博士研究生', en: 'Ph.D. Student' },
  university: { zh: '南开大学', en: 'Nankai University' },
  college: { zh: '人工智能学院', en: 'College of Artificial Intelligence' },
  // Image files live in public/. Use the URL without the public/ prefix.
  portrait: '/assets/portrait-000.jpg',
  tagline: { zh: '探索高效的神经架构搜索与演化学习。', en: 'Exploring efficient neural architecture search and evolutionary learning.' },
  bio: {
    zh: '我目前是南开大学人工智能学院的博士研究生，研究兴趣包括自动化机器学习、神经架构搜索和演化计算。此前，我在南京信息工程大学学习计算机科学与技术，完成本科与硕士阶段的学习。',
    en: 'I am a Ph.D. student in the College of Artificial Intelligence at Nankai University. My research interests include automated machine learning, neural architecture search, and evolutionary computation. Previously, I studied Computer Science and Technology at Nanjing University of Information Science and Technology at both undergraduate and master’s levels.',
  },
  researchStatement: {
    zh: '我的研究关注如何在有限计算资源下高效地设计神经网络。通过学习架构的图表示、构建性能预测模型与比较器，我探索更有效的搜索反馈，并结合演化和多目标优化寻找性能与开销之间的合理权衡。',
    en: 'My research asks how we can design effective neural networks with limited computational resources. I explore graph representations, performance predictors, and pairwise comparators to guide architecture search, together with evolutionary and multi-objective optimization to balance performance and computational cost.',
  },
};

export const research = [
  {
    id: 'efficient-nas', number: '01', icon: 'search', label: 'Efficient NAS',
    title: { zh: '高效神经架构搜索', en: 'Efficient architecture search' },
    short: { zh: '用计算开销更低的性能评估，辅助神经网络架构设计。', en: 'Guiding neural architecture design with less expensive performance evaluation.' },
    question: { zh: '如何减少架构搜索中昂贵的网络训练与评估？', en: 'How can we reduce expensive training and evaluation during architecture search?' },
    description: { zh: '研究代理模型辅助的演化神经架构搜索。通过架构特征学习和分阶段性能评估，让搜索过程利用更有针对性的反馈，在有限计算预算下识别有潜力的候选架构。', en: 'I study surrogate-assisted evolutionary neural architecture search. Architecture features and staged evaluation provide targeted feedback for identifying promising candidates under a limited computational budget.' },
    methods: { zh: '代理模型 · 分层评估 · 演化搜索', en: 'Surrogate models · Tiered evaluation · Evolutionary search' },
    paperIds: ['dsgenas'],
  },
  {
    id: 'representation', number: '02', icon: 'graph', label: 'Graph Representation',
    title: { zh: '架构表示与性能比较', en: 'Representations & comparators' },
    short: { zh: '结合图神经网络与对比学习，理解架构之间的性能关系。', en: 'Learning performance relationships through graph neural networks and contrastive learning.' },
    question: { zh: '如何学习能够反映架构性能关系的表示空间？', en: 'How can learned representations capture performance relationships between architectures?' },
    description: { zh: '将神经网络架构建模为图，学习反映结构与性能关系的嵌入表示。进一步通过成对比较和同构多比较机制，为演化搜索提供相对性能排序。', en: 'I model neural architectures as graphs and learn embeddings that reflect their structure and performance relationships. Pairwise comparison and isomorphic multi-comparison then provide relative rankings for evolutionary search.' },
    methods: { zh: '图神经网络 · 对比学习 · 成对比较', en: 'Graph neural networks · Contrastive learning · Pairwise comparison' },
    paperIds: ['gec-imc', 'emcenas'],
  },
  {
    id: 'optimization', number: '03', icon: 'pareto', label: 'Evolutionary Optimization',
    title: { zh: '演化与多目标优化', en: 'Evolutionary optimization' },
    short: { zh: '探索模型性能、计算成本与搜索效率之间的权衡。', en: 'Exploring trade-offs between model performance, computational cost, and search efficiency.' },
    question: { zh: '如何在多个相互竞争的目标之间寻找有效解？', en: 'How can search identify useful trade-offs between competing objectives?' },
    description: { zh: '关注演化计算与深度学习的结合，包括演化和梯度混合优化，以及神经架构搜索中的多目标权衡。研究方法覆盖差分进化、遗传算法及群智能优化。', en: 'My interests connect evolutionary computation with deep learning, including hybrid evolutionary and gradient-based optimization and multi-objective trade-offs in architecture search. Relevant methods include differential evolution, genetic algorithms, and swarm optimization.' },
    methods: { zh: '多目标优化 · 混合优化 · 群智能', en: 'Multi-objective optimization · Hybrid optimization · Swarm intelligence' },
    paperIds: [],
  },
];

export const education = [
  { period: { zh: '现在', en: 'Present' }, degree: { zh: '博士研究生', en: 'Ph.D. Student' }, institution: { zh: '南开大学', en: 'Nankai University' }, detail: { zh: '人工智能学院', en: 'College of Artificial Intelligence' }, current: true },
  { period: { zh: '2023 — 2026', en: '2023 — 2026' }, degree: { zh: '计算机科学与技术 · 硕士', en: 'Master’s studies · Computer Science and Technology' }, institution: { zh: '南京信息工程大学', en: 'Nanjing University of Information Science and Technology' }, detail: { zh: '计算机学院', en: 'College of Computer Science' }, current: false },
  { period: { zh: '2019 — 2023', en: '2019 — 2023' }, degree: { zh: '计算机科学与技术 · 本科', en: 'Undergraduate studies · Computer Science and Technology' }, institution: { zh: '南京信息工程大学', en: 'Nanjing University of Information Science and Technology' }, detail: { zh: '长望学院', en: 'Changwang College' }, current: false },
];

export const projects = [
  { year: '2025', researchIds: ['efficient-nas', 'representation'], title: { zh: '神经架构搜索中的性能评估策略研究', en: 'Performance evaluation strategies for neural architecture search' }, program: { zh: '江苏省研究生科研创新计划项目', en: 'Jiangsu Postgraduate Research Innovation Program' }, description: { zh: '探索演化神经架构搜索中的高效性能评估策略，研究架构表示学习与性能预测器，降低搜索过程中对计算资源的需求。', en: 'Investigating efficient performance evaluation for evolutionary neural architecture search through architecture representation learning and performance predictors.' } },
  { year: '2022 — 2023', researchIds: ['optimization'], title: { zh: '基于演化和梯度的神经网络优化', en: 'Neural network optimization with evolutionary and gradient-based methods' }, program: { zh: '卓越人才培养计划 · 大学生创新训练项目', en: 'Undergraduate Innovation Training Project' }, description: { zh: '研究演化算法与梯度下降的混合优化，通过两阶段训练和自适应学习率机制探索神经网络参数优化方法。', en: 'Exploring hybrid parameter optimization through evolutionary algorithms and gradient descent, with two-stage training and adaptive learning rates.' } },
];

export const awards = [
  { date: '2025.10', name: { zh: '第十九届“挑战杯”全国大学生课外学术科技作品竞赛 · 人工智能+应用赛', en: '19th Challenge Cup · AI+ Application Competition' }, prize: { zh: '国家级二等奖', en: 'National Second Prize' } },
  { date: '2025.05', name: { zh: '第十六届蓝桥杯 · 项目实战赛', en: '16th Lanqiao Cup · Project Competition' }, prize: { zh: '省级二等奖', en: 'Provincial Second Prize' } },
  { date: '2024.12', name: { zh: '华为杯第二十一届中国研究生数学建模竞赛', en: '21st China Postgraduate Mathematical Contest in Modeling' }, prize: { zh: '国家级二等奖', en: 'National Second Prize' } },
  { date: '2024.11', name: { zh: '第六届全球校园人工智能算法精英大赛 · 全国总决赛', en: '6th Global Campus AI Algorithm Elite Competition · National Final' }, prize: { zh: '国家级二等奖', en: 'National Second Prize' } },
  { date: '2024.08', name: { zh: '江苏省研究生数学建模科研创新实践大赛', en: 'Jiangsu Postgraduate Mathematical Modeling Competition' }, prize: { zh: '省级一等奖', en: 'Provincial First Prize' } },
];

export const patent = {
  title: { zh: '基于性能层级代理辅助的演化神经架构搜索方法和系统', en: 'Evolutionary neural architecture search method and system assisted by a performance-tier surrogate' },
  authors: { zh: '张晓磊、薛羽', en: 'Xiaolei Zhang, Yu Xue' },
  number: 'CN118917353B', date: '2025-01-28',
};
