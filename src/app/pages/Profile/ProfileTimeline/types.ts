import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ProfileTimelineEvent {
  id: number;
  type:
    | 'achievement'
    | 'level_up'
    | 'game_played'
    | 'tournament'
    | 'friend_added';
  title: string;
  description: string;
  date: string;
  icon: IconProp;
  game?: string;
}
