import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/users/averydl
 */
const data = [
  {
    label: 'Public Repo\'s:',
    key: 'public_repos',
    link: 'https://github.com/averydl',
  },
  {
    label: 'Followers:',
    key: 'followers',
  },
  {
    label: 'Following:',
    key: 'following',
  },
  {
    label: 'Last Updated:',
    key: 'updated_at',
    format: (x) => dayjs(x).format('MMMM D, YYYY'),
  },
  {
    label: 'Languages:',
    key: 'languages',
  },
];

export default data;
