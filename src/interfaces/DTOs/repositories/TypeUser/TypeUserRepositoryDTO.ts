import { TypeUser } from "@prisma/client";

export interface CreateDTO {
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
export interface UpdateDTO {
  id: number;
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
export interface DeleteDTO {
  id: number;
}
export interface findByLevelDTO {
  level: "Beginner" | "Intermediate" | "Queen";
}
