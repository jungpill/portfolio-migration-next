import izi_eung from "./izi - 응급실 [쾌걸춘향 OST] [가사Lyrics].mp3";
import sweetbox from "./SWEETBOX LIFE IS COOL Lyric Video (2004).mp3";
import ddg_confess from "./뜨거운 감자 - 고백 [가사Lyrics].mp3"
import park_hyo_shin from "./박효신 - 눈의 꽃 [미안하다 사랑한다 OST] [가사Lyrics].mp3";
import epikhigh from "./에픽하이(Epik high) - 우산 (Feat. 윤하).mp3";
import haha from "./하하 - 키 작은 꼬마 이야기 [가사Lyrics].mp3";

export const bgmMap = {
  '응급실': izi_eung,
  "Life Is Cool": sweetbox,
  '고백': ddg_confess,
  "눈의 꽃": park_hyo_shin,
  "Epik High": epikhigh,
  "키 작은 꼬마": haha,
} as const;

export type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
};

export const tracks: Track[] = [
  { id: "izi-eung", title: "응급실", artist: "izi", src: izi_eung },
  { id: "sweetbox-lic", title: "Life Is Cool", artist: "SWEETBOX", src: sweetbox },
  { id: "hotpot-confess", title: "고백", artist: "뜨거운 감자", src: ddg_confess },
  { id: "park-hyo-shin-snowflower", title: "눈의 꽃", artist: "박효신", src: park_hyo_shin },
  { id: "epikhigh", title: "…", artist: "Epik High", src: epikhigh },
  { id: "haha", title: "키 작은 꼬마 이야기", artist: "하하", src: haha },
];