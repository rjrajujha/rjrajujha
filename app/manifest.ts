import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raju Jha',
    short_name: 'Raju Jha',
    description: 'Raju Jha',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  }
}