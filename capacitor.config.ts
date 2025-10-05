import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.comet.gamehouse',
  appName: 'Comet GameHouse',
  webDir: 'dist/web',
  android: {
    path: 'dist/android',
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
