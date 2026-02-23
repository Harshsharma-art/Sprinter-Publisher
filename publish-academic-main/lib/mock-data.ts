export interface Journal {
  id: string;
  title: string;
  description: string;
  impactFactor: number;
  issn: string;
  editorInChief: string;
  discipline: string;
  paperCount: number;
  acceptanceRate: number;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  volume: number;
  issue: number;
  pages: string;
  discipline: string;
  citations: number;
  abstract: string;
}

export interface ResearchField {
  name: string;
  icon: string;
  paperCount: number;
  color: string;
}

export const journals: Journal[] = [
  {
    id: '1',
    title: 'Nature Physics',
    description: 'Interdisciplinary research featuring the most important advances in fundamental physics.',
    impactFactor: 14.5,
    issn: '1745-2481',
    editorInChief: 'Dr. Sarah Chen',
    discipline: 'Physics',
    paperCount: 2847,
    acceptanceRate: 12,
  },
  {
    id: '2',
    title: 'Cell Biology Today',
    description: 'Cutting-edge research in cellular and molecular biology advancing life sciences.',
    impactFactor: 11.2,
    issn: '1467-8123',
    editorInChief: 'Prof. James Mitchell',
    discipline: 'Biology',
    paperCount: 3214,
    acceptanceRate: 15,
  },
  {
    id: '3',
    title: 'Advanced Materials & Engineering',
    description: 'Novel materials, engineering solutions, and technological innovations.',
    impactFactor: 9.8,
    issn: '2089-5432',
    editorInChief: 'Dr. Maria Rodriguez',
    discipline: 'Engineering',
    paperCount: 2156,
    acceptanceRate: 18,
  },
  {
    id: '4',
    title: 'Quantum Computing Review',
    description: 'Frontier research in quantum computing, algorithms, and quantum information theory.',
    impactFactor: 8.3,
    issn: '2156-3489',
    editorInChief: 'Prof. David Kumar',
    discipline: 'Computer Science',
    paperCount: 1847,
    acceptanceRate: 14,
  },
  {
    id: '5',
    title: 'Environmental Science & Ecology',
    description: 'Research on environmental systems, climate, and ecological sustainability.',
    impactFactor: 7.9,
    issn: '2078-1341',
    editorInChief: 'Dr. Elena Thompson',
    discipline: 'Environmental Science',
    paperCount: 2534,
    acceptanceRate: 16,
  },
  {
    id: '6',
    title: 'Medical Innovation Quarterly',
    description: 'Breakthrough medical research and clinical innovations improving patient outcomes.',
    impactFactor: 13.1,
    issn: '1984-7234',
    editorInChief: 'Dr. Hassan Patel',
    discipline: 'Medicine',
    paperCount: 3892,
    acceptanceRate: 11,
  },
];

export const recentPapers: Paper[] = [
  {
    id: '1',
    title: 'Novel Quantum Entanglement Detection Methods in Macroscopic Systems',
    authors: ['Dr. Emma Watson', 'Prof. Robert Chang', 'Dr. Lisa Anderson'],
    journal: 'Nature Physics',
    date: '2024-02-15',
    volume: 20,
    issue: 2,
    pages: '145-158',
    discipline: 'Physics',
    citations: 47,
    abstract: 'This paper presents groundbreaking techniques for detecting quantum entanglement at macroscopic scales, potentially revolutionizing quantum computing and information transfer.',
  },
  {
    id: '2',
    title: 'CRISPR-Based Gene Therapy for Inherited Neurological Disorders',
    authors: ['Dr. Sophie Laurent', 'Prof. Ming Chen', 'Dr. Caroline Brooks'],
    journal: 'Cell Biology Today',
    date: '2024-02-10',
    volume: 15,
    issue: 4,
    pages: '234-251',
    discipline: 'Biology',
    citations: 89,
    abstract: 'Development and clinical validation of a novel CRISPR-based approach for treating hereditary neurological conditions with promising results in preliminary trials.',
  },
  {
    id: '3',
    title: 'Sustainable Carbon-Neutral Materials for Construction Industry',
    authors: ['Dr. Marcus Johnson', 'Prof. Sofia Garcia', 'Dr. Wei Liu'],
    journal: 'Advanced Materials & Engineering',
    date: '2024-02-05',
    volume: 18,
    issue: 1,
    pages: '78-95',
    discipline: 'Engineering',
    citations: 23,
    abstract: 'This research introduces a new class of bio-composite materials that achieve carbon neutrality while maintaining superior structural properties for modern construction.',
  },
  {
    id: '4',
    title: 'AI-Optimized Protocol for Drug Discovery Acceleration',
    authors: ['Dr. Priya Sharma', 'Prof. Alexander Mueller', 'Dr. James Park'],
    journal: 'Medical Innovation Quarterly',
    date: '2024-01-28',
    volume: 12,
    issue: 3,
    pages: '412-428',
    discipline: 'Medicine',
    citations: 156,
    abstract: 'Machine learning framework that reduces drug discovery timelines by 70% while maintaining safety and efficacy standards through intelligent molecular screening.',
  },
];

export const researchFields: ResearchField[] = [
  { name: 'Physics', icon: '⚛️', paperCount: 2847, color: 'bg-blue-100' },
  { name: 'Biology', icon: '🧬', paperCount: 3214, color: 'bg-green-100' },
  { name: 'Engineering', icon: '⚙️', paperCount: 2156, color: 'bg-orange-100' },
  { name: 'Computer Science', icon: '💻', paperCount: 1847, color: 'bg-purple-100' },
  { name: 'Medicine', icon: '⚕️', paperCount: 3892, color: 'bg-red-100' },
  { name: 'Environmental Science', icon: '🌍', paperCount: 2534, color: 'bg-emerald-100' },
];

export const platformStats = {
  totalJournals: 42,
  totalPapers: 18490,
  totalAuthors: 45230,
  citationsPerDay: 2847,
  acceptedThisMonth: 247,
  pendingReview: 1823,
};
