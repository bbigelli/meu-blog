import Link from 'next/link';
import { Artigo } from '../../../types/Artigo';

interface ArticleCardProps {
  artigo: Artigo;
}

export default function ArticleCard({ artigo }: ArticleCardProps) {
  const dataFormatada = new Date(artigo.dataPublicacao).toLocaleDateString('pt-BR');
  
  return (
    <Link href={`/artigos/${artigo.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Imagem: {artigo.imagem}</span>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            {artigo.titulo}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{artigo.descricao}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{artigo.autor}</span>
            <span>{dataFormatada}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

