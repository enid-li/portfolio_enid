export interface MediaItem {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    caption?: string;
    fit?: 'cover' | 'contain';
  }
  
 export interface SectionProps {
    subtitle?: string;
    title?: string;
    description?: string; // Supports simple HTML/Line breaks
    media?: MediaItem | MediaItem[]; // Can be one item or a grid of items
    layout?: 'default' | 'full-width'; // Default is contained text, full is for big images
    fit?: 'cover' | 'contain'; // Image fit option
  }
  