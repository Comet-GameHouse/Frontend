import { Link } from 'react-router-dom';
import { Button, SectionHeader } from '@components';
import { FEATURED_GAMES } from './data';
import { GameCard } from './GameCard';

export const FeaturedGames = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <SectionHeader
        title="Featured Games"
        subtitle="Jump into our most popular multiplayer experiences. Updated daily with new challenges!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {FEATURED_GAMES.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>

      {/* View All Games Button */}
      <div
        className="text-center mt-8 sm:mt-12"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="200"
      >
        <Link to="/games" className="w-full">
          <Button
            variant="primary"
            design="neon"
            pulse
            size="lg"
            icon="arrow-right"
            className="w-full"
          >
            View All Games
          </Button>
        </Link>
      </div>
    </section>
  );
};
