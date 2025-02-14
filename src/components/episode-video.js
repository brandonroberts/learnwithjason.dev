// this is for episodes that have already happened and the videos are posted
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { EpisodePoster } from './episode-poster.js';

export function EpisodeVideo({ episode }) {
  const [playing, setPlaying] = useState(false);

  const teacher = episode.guest?.[0] || { name: 'Jason Lengstorf' };
  const teacherImage =
    teacher?.guestImage?.asset.url ||
    'https://lengstorf.com/images/jason-lengstorf.jpg';

  return (
    <div class="episode-video">
      {playing ? (
        <div class="responsive-video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${episode.youtubeID}?listType=playlist&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&autoplay=1&rel=0`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      ) : (
        <button onClick={() => setPlaying(true)} aria-label="play video">
          <EpisodePoster
            title={episode.title}
            teacherName={teacher.name}
            teacherImage={teacherImage}
          />
        </button>
      )}
    </div>
  );
}
