import { TypeUser } from "@prisma/client";

export interface TypeUserRepositoryCreateDTO {
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
export interface TypeUserRepositoryUpdateDTO {
  id: number;
  data: Omit<TypeUser, "id" | "created_at" | "updated_at">;
}
export interface TypeUserRepositoryDeleteDTO {
  id: number;
}
export interface TypeUserRepositoryFindByLevelDTO {
  level: "Beginner" | "Intermediate" | "Queen";
}
