import { https_effect, https_no_effect } from "../config";

export const authSer = {
  login: (user) => https_effect.post("auth/admin/login", user),
  checkAdminPermission: () =>
    https_no_effect.post("auth/admin/check-admin-permission"),
};
