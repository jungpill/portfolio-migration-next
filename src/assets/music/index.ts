export type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
};

export const tracks: Track[] = [
  {
    id: "izi-eung",
    title: "응급실",
    artist: "izi",
    src: "/music/izi - 응급실 [쾌걸춘향 OST] [가사Lyrics].mp3"
  },
  {
    id: "sweetbox-lic",
    title: "Life Is Cool",
    artist: "SWEETBOX",
    src: "/music/SWEETBOX LIFE IS COOL Lyric Video (2004).mp3"
  },
  {
    id: "hotpot-confess",
    title: "고백",
    artist: "뜨거운 감자",
    src: "/music/뜨거운 감자 - 고백 [가사Lyrics].mp3"
  },
  {
    id: "park-hyo-shin-snowflower",
    title: "눈의 꽃",
    artist: "박효신",
    src: "/music/박효신 - 눈의 꽃 [미안하다 사랑한다 OST] [가사Lyrics].mp3"
  },
  {
    id: "epikhigh",
    title: "…",
    artist: "Epik High",
    src: "/music/에픽하이(Epik high) - 우산 (Feat. 윤하).mp3"
  },
  {
    id: "haha",
    title: "키 작은 꼬마 이야기",
    artist: "하하",
    src: "/music/하하 - 키 작은 꼬마 이야기 [가사Lyrics].mp3"
  }
] as const;