export type Skill = {
  id: string;
  name: string;
  detail: string;
};

export type EducationItem = {
  id: string;
  period: string;
  title: string;
  detail: string;
};

export type Project = {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technology: string;
  year: string;
};

export const skills: Skill[] = [
  {
    id: 'linux',
    name: 'Linux',
    detail: 'The shell, files, permissions, and processes used to run and inspect a service.',
  },
  {
    id: 'git',
    name: 'Git',
    detail: 'Commits, branches, and history so a service can be changed without losing the last working version.',
  },
  {
    id: 'python',
    name: 'Python',
    detail: 'Scripts and backend services, including reading data and returning a clear result.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    detail: 'The language used to write Node.js servers, request handlers, and small tools.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    detail: 'HTTP servers that accept a request, run logic, and send a response.',
  },
  {
    id: 'rest',
    name: 'REST APIs',
    detail: 'Resources, methods, and status codes so a client can use a service without seeing its internals.',
  },
  {
    id: 'http',
    name: 'HTTP',
    detail: 'Requests, responses, headers, and status codes between a client and a server.',
  },
  {
    id: 'sql',
    name: 'SQL',
    detail: 'Tables, queries, and relational data stored behind an API.',
  },
  {
    id: 'json',
    name: 'JSON',
    detail: 'The request and response format used between a backend and its clients.',
  },
  {
    id: 'auth',
    name: 'Authentication',
    detail: 'Checking who is calling a route before private data is returned.',
  },
  {
    id: 'testing',
    name: 'Testing',
    detail: 'Checks that an endpoint still returns the right status and body after a change.',
  },
  {
    id: 'logging',
    name: 'Logging',
    detail: 'A record of what the service did, so a failure can be traced from the terminal.',
  },
];

export const education: EducationItem[] = [
  {
    id: 'ines',
    period: 'September 2024 onward',
    title: 'INES-Ruhengeri',
    detail: 'Software Engineering. Registration number 25/27014.',
  },
];

export const projects: Project[] = [
  {
    id: 'node-api',
    title: 'Node.js request API',
    year: '2026 · Backend',
    problem:
      'A client needed a small HTTP service that accepts JSON, rejects a bad request, and returns a stable response.',
    contribution:
      'I wrote the Node.js routes, checked the incoming JSON, and returned status codes and error messages instead of failing silently.',
    technology: 'JavaScript and Node.js',
  },
  {
    id: 'python-linux',
    title: 'Python tools on Linux',
    year: '2026 · Backend',
    problem:
      'Repeated terminal work needed a repeatable Python tool, with the source kept in Git so a change could be reviewed.',
    contribution:
      'I wrote the Python script on Linux, ran it from the shell, and committed the working version with Git.',
    technology: 'Python, Linux, and Git',
  },
];

export const contactLinks = [
  { label: 'Email moosamagadi@gmail.com', url: 'mailto:moosamagadi@gmail.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-osama-72284420b/' },
  { label: 'WhatsApp', url: 'https://wa.me/249124215192' },
] as const;
