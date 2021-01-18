const positions = [
  {
    company: 'Visa, Inc.',
    position: 'Software Engineer',
    link: 'https://visa.com',
    daterange: 'October 2020 - Present',
    points: [
      'Implements back-end features in Go using technologies including Docker and Kubernetes, and developer tools including Make and Git.',
      'Writes unit tests for all new and modified code to maintain minimum code coverage and allow automated testing in the existing CI pipeline.',
      'Works in an agile scrum team operating in three-week sprints, including participation in code review via Bitbucket, and issue/bug tracking using Jira.',
      'Writes technical documentation and usage guidelines for new features in the internal Confluence wiki.',
    ],
  },
  {
    company: 'NBCUniversal',
    position: 'Data Engineer (Contract)',
    link: 'https://www.nbcuniversal.com/',
    daterange: 'May, 2020 - October, 2020',
    points: [
      'Implemented and maintained AWS application utilized by over 100 internal users: core functionality included '
      + 'generating audience segments for targeted notifications reaching >1M active mobile app users, '
      + 'sending real-time notifications to users when new content is published internally or by certain competitors, '
      + '& sending alerts to inform users when viewership of certain content exceeded a configurable threshold.',
      'Developed and maintained ETL pipelines to ingest data from internal and external sources via AWS'
      + 'using software including Spark and Airflow.',
      'Implemented and automated queries at the request of internal stakeholders to obtain insights from ingested data.',
    ],
  },
  {
    company: 'NBCUniversal',
    position: 'Software Engineer Intern',
    link: 'https://www.nbcuniversal.com/',
    daterange: 'January 2020 - May 2020',
    points: [
      'Developed software in agile kanban team, participated in daily stand-up meetings, and used Git and Jira for version control/issue tracking.',
      'Implemented cloud-based software using AWS services including Lambda, SNS, DynamoDB, Athena, Glue, EMR, and S3.',
      'Documented project specifications and implementation details for team review and reference.',
    ],
  },
  {
    company: 'Visa, Inc.',
    position: 'Software Engineer Intern',
    link: 'https://visa.com',
    daterange: 'June 2019 - September 2019',
    points: [
      'Successfully designed and implemented full-stack intern project using React.js, Go, Docker, and Kubernetes.',
      'Followed Agile development methodology including two week sprints, daily standup meetings, and issue tracking with Jira.',
      'Wrote technical documentation including project specifications, high- and low-level design, and implementation details.',
      'Gave presentations/project demonstrations to both technical and non-technical staff.',
    ],
  },
];

export default positions;
