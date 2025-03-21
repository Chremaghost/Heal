export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string;
}

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  content: string;
  video_url?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

export interface Profile {
  id: string;
  email: string;
  role: 'admin' | 'member';
  created_at: string;
}