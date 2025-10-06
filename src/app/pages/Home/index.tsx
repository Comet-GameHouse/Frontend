import { HeroSection } from './HeroSection'
import { FeaturedGames } from './FeaturedGames'
import { QuickActions } from './QuickActions'
import { StatsSection } from './StatsSection'
import { CommunityFeatures } from './CommunityFeatures'

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <HeroSection />
        <FeaturedGames />
        <QuickActions />
        <StatsSection />
        <CommunityFeatures />
      </div>
    </div>
  )
}