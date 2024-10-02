/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_ROLE } from "@/contains/role";
// import { SvgIconTypeMap } from "@mui/material";
// import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

// export interface DrawerItem {
//   title: string;
//   path: string;
//   parentPath?: string;
//   icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
//   child?: DrawerItem[];
// }

export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface TBlog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}
