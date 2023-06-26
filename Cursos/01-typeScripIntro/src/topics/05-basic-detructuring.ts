interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 40,
  song: 'Golumns',
  details: {
    author: 'Ed',
    year: 200,
  },
};

const { song, songDuration: duration, details } = audioPlayer;

const { author } = details;

const [, , trunks = 'Not Found']: string[] = ['Vegeta', 'Goku', 'Trunks'];

console.log('Perosonaje 3', trunks);

export {};
