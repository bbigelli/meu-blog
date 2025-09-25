import ArticleCard from './components/ArticleCard';
import { Artigo } from '../../types/Artigo';

async function getArtigos(): Promise<Artigo[]> {
  // Em um caso real, aqui viria a fetch para a API
  const response = await import('./data/artigos.json');
  return response.artigos;
}

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Meu Blog Next.js</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artigos.map((artigo) => (
            <ArticleCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      </div>
    </main>
  );
}