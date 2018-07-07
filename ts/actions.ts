export const UPDATE_WALL_WIDTH = 'update wall width';
export const UPDATE_WALL_HEIGHT = 'update wall height';
export const UPDATE_WALL_THICKNESS = 'update wall thickness';
export const ADD_HOLE = 'add hole';
export const UPDATE_HOLE_X = 'update hole x';
export const UPDATE_HOLE_Y = 'update hole y';
export const UPDATE_HOLE_WIDTH = 'update hole width';
export const UPDATE_HOLE_HEIGHT = 'update hole height';

export const updateWallWidth = (width:number) => {
  return {
    type: UPDATE_WALL_WIDTH,
    width,
  }
};

export const updateWallHeight = (height:number) => {
  return {
    type: UPDATE_WALL_HEIGHT,
    height,
  }
};

export const updateWallThickness = (thickness:number) => {
  return {
    type: UPDATE_WALL_THICKNESS,
    thickness,
  }
};

export const addHole = () => {
  return {
    type: ADD_HOLE,
  }
};

export const updateHoleX = (id: number, x:number) => {
  return {
    type: UPDATE_HOLE_X,
    id,
    x,
  }
};

export const updateHoleY = (id: number, y:number) => {
  return {
    type: UPDATE_HOLE_Y,
    id,
    y,
  }
};

export const updateHoleWidth = (id: number, width:number) => {
  return {
    type: UPDATE_HOLE_WIDTH,
    id,
    width,
  }
};

export const updateHoleHeight = (id: number, height:number) => {
  return {
    type: UPDATE_HOLE_HEIGHT,
    id,
    height,
  }
};