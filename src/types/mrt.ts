export type LineProps = {
  line: string;
};

export type StationInfoProps = {
  id: string;
  name: string;
  label: string;
  position: {
    longitude: number;
    latitude: number;
  };
};

export type MrtData = {
  [line: string]: StationInfoProps[];
};

export type StationData = LineProps & StationInfoProps;
