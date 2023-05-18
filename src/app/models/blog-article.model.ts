import { ImageParameters } from "./image-service.model";

export interface BlogArticle{
  title: string;
  date: Date | undefined;
  author: string;
  description: string;
  imgSearchParameters: ImageParameters;
}
