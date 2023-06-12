export type Coordinates = [x: number, y: number];

export type Rover = {
  coordinates: Coordinates;
  direction: string;
};

export type Move = {
  xAxis: number;
  yAxis: number;
  direction: number;
};

export type Plateau = {
  width: number;
  height: number;
};

export interface directionType {
  [key: number]: string;
}
