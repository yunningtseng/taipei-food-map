export type LineProps = {
  line: string;
};

export type StationInfoProps = {
  stationID: string;
  stationName: string;
  stationPosition: {
    longitude: number;
    latitude: number;
  };
};

export type MrtData = {
  [line: string]: StationInfoProps[];
};

export type StationData = LineProps & StationInfoProps;
