const levels = [
  {
    level: 1,
    title: 'No Experience',
    description: 'Just a baseline number - nothing in this list has a "1" rating',
  },
  {
    level: 2,
    title: 'Limited Exposure',
    description: 'I have used it before, either briefly or in a very limited capacity',
  },
  {
    level: 3,
    title: 'Significant Exposure',
    description: 'I have used academically or for a non-trivial project, but may not be familiar with more advanced features',
  },
  {
    level: 4,
    title: 'Proficiency',
    description: 'I have used it daily for at least 6 months, either academically or for work/personal projects',
  },
  {
    level: 5,
    title: 'Mastery',
    description: 'I am reserving this level for skills I have honed to near perfection; hopefully more to come soon!',
  },
];

const skills = [
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'HTML/CSS/JavaScript',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'NoSQL',
    competency: 2,
    category: ['Databases', 'Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Dev Tools'],
  },
  {
    title: 'Make',
    competency: 2,
    category: ['Dev Tools'],
  },
  {
    title: 'Jira',
    competency: 3,
    category: ['Tools', 'Dev Tools'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#ff7f50',
  '#40e0d0',
  '#6495ed',
  '#483d8b',
  '#ba55d3',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills, levels };
