export const CONFIG: any = {
  API_PATH: {
    /********************OAUTH SERVICE*****************/
    'restUtt': '/rest',
    /********************File SYSTEM****************/
    'fileStorage': '/file',
    /********************UTT ESS SYSTEM*****************/
    'userInfo': '/rest/users',
    'transferInfo': '/rest/transfers',
  }
};


export enum ACTION_FORM {
  SEARCH = 'SEARCH',
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  IMPORT = 'IMPORT',
  VIEW = 'VIEW',
  DELETE = 'DELETE',
  CONFIG = 'CONFIG',
  CRITERION_UPDATE = 'CRITERION_UPDATE',
  CRITERION_CHILD_UPDATE = 'CRITERION_CHILD_UPDATE',
};


export enum RESOURCE {
  USER = 'USER',
  TRANSFER = 'TRANSFER',
  SYSCAT = 'SYS_CAT'
}

export const DEFAULT_MODAL_OPTIONS: any = {
  size: 'lg',
  backdrop: 'static'
};

export const SMALL_MODAL_OPTIONS: any = {
  size: 'md',
  keyboard: true,
};
export const MEDIUM_MODAL_OPTIONS: any = {
  size: 'md',
  keyboard: true,
  draggable: true
};
export const LARGE_MODAL_OPTIONS: any = {
  size: 'lg',
  backdrop: 'static',
  windowClass: 'modal-xxl',
  keyboard: false
};
