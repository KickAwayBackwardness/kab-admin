import { https_effect, https_no_effect } from "../config";

export const typeSer = {
  getAll: () => https_no_effect.get("types/get-all"),
  getOneType: (type_id) => https_no_effect.get(`types/get-one/${type_id}`),
  update: (type_id, type) =>
    https_effect.patch(`types/update/${type_id}`, type),
  add: (type) => https_effect.post("types/add", type),
  inactive: (type_id) => https_no_effect.patch(`types/inactive/${type_id}`),
};
