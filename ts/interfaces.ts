export interface PaneSettings {
  x:number,
  y:number,
  z:number,
  width:number,
  height:number,
  depth:number,
};

export interface Hole {
  id: string,
  index: number,
  x: number,
  y: number,
  width: number,
  height: number,
};

export interface Block {
  x: number,
  x2: number,
  y: number,
  y2: number,
  width: number,
  height: number,
};

export interface WallState {
  width: number,
  height: number,
  thickness: number,
  holes: Array<Hole>,
};

export interface AppState {
  wall: WallState,
};

export interface CanvasPreview {
  update: Function
}

export interface ReduxAction {
  type: string,
  payload: {
    [key:string]: any,
  },
}
