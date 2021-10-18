export interface ScrubberProps {
  duration: number;
  progress: number;
  theme: ThemeProps;
  onSeek: (pos: number) => void;
  onSeekRelease: (percent: any) => void;
}

interface ThemeProps {
  scrubberThumb: string;
  scrubberBar: string;
}
