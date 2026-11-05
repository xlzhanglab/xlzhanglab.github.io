import { publications } from '../data/publications';
export const GET = () => new Response(publications.map(p => p.bibtex).join('\n\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
