export class UserPermission {
  grantedDomain: string;
  operationCode: string;
  resourceCode: string;
  defaultDomain: number;
}

export class UserMenu {
  name: string;
  code: string;
  url: string;
  reourceKey: string;
  sortOrder: string;
  sysMenuId: string;
}

export class UserToken {
  fullName: string;
  phoneNumber: string;
  roleCode: string;
  roleName: string;
  email: string;
  userCode: string;
  userName: string;
  userId: number;
  imageUrl: string;
  userInfo: any;
}
