import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Artigo } from '../../../../types/Artigo';

async function getArtigo(slug: string): Promise<Artigo | undefined> {
  // Em um caso real, aqui viria a fetch para a API
  const response = await import('../../data/artigos.json');
  return response.artigos.find((artigo: Artigo) => artigo.slug === slug);
}

interface ArtigoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArtigoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigo(slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      type: 'article',
      publishedTime: artigo.dataPublicacao,
      authors: [artigo.autor],
    },
  };
}

export async function generateStaticParams() {
  // Em um caso real, aqui viria a fetch para a API
  const response = await import('../../data/artigos.json');
  
  return response.artigos.map((artigo: Artigo) => ({
    slug: artigo.slug,
  }));
}

export default async function ArtigoPage({ params }: ArtigoPageProps) {
  const { slug } = await params;
  const artigo = await getArtigo(slug);

  if (!artigo) {
    notFound();
  }

  const dataFormatada = new Date(artigo.dataPublicacao).toLocaleDateString('pt-BR');

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{artigo.titulo}</h1>
      
      <div className="flex items-center text-gray-600 mb-8">
        <span className="mr-4">Por {artigo.autor}</span>
        <span>•</span>
        <span className="ml-4">{dataFormatada}</span>
      </div>

      <div className="h-64 bg-gray-200 mb-8 flex items-center justify-center">
        <span className="text-gray-500">Imagem: {artigo.imagem}</span>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">{artigo.descricao}</p>
        <div className="whitespace-pre-wrap">{artigo.conteudo}</div>
      </div>
    </article>
  );
}