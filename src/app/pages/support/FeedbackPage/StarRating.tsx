import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export const StarRating = ({ rating, onRatingChange }: Props) => {
  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return 'Poor';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return 'Select your rating';
    }
  };

  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 sm:gap-4 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="focus:outline-none transition-transform duration-200 hover:scale-110"
          >
            <FontAwesomeIcon
              icon="star"
              className={`text-3xl sm:text-4xl ${
                star <= rating
                  ? 'text-yellow-400 drop-shadow-lg'
                  : 'text-gray-600'
              } transition-colors duration-200`}
            />
          </button>
        ))}
      </div>
      <div className={`text-lg font-semibold font-orbitron transition-colors duration-200 ${
        rating > 0 ? 'text-yellow-400' : 'text-gray-500'
      }`}>
        {getRatingText(rating)}
      </div>
    </div>
  );
};