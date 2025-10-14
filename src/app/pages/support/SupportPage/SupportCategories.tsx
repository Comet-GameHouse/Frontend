import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { supportCategories } from './data';

interface Props {
  searchQuery: string;
}

export const SupportCategories = ({ searchQuery }: Props) => {
  const filteredCategories = supportCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (filteredCategories.length === 0) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon="search" className="text-gray-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
        <p className="text-gray-400">Try different search terms or browse all categories</p>
      </div>
    );
  }

  return (
    <div>
      <h2 
        className="text-3xl font-bold font-orbitron text-white text-center mb-4"
        data-aos="fade-up"
      >
        Popular Help Categories
      </h2>
      <p 
        className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Browse our most frequently asked questions and guides
      </p>

      <div className="space-y-6">
        {filteredCategories.map((category, categoryIndex) => (
          <div
            key={category.id}
            data-aos="fade-up"
            data-aos-delay={categoryIndex * 100}
            className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon 
                  icon={category.icon} 
                  className="text-blue-400 text-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-orbitron">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.articles
                .filter(article =>
                  searchQuery === '' ||
                  article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  article.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((article, articleIndex) => (
                <Link
                  key={article.id}
                  to={`/help/${article.id}`}
                  className="block bg-gray-800/20 border border-gray-700/20 rounded-xl p-4 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group/article"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm leading-relaxed group-hover/article:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h4>
                    {article.popular && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.readTime} read</span>
                    <FontAwesomeIcon 
                      icon="arrow-right" 
                      className="group-hover/article:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};