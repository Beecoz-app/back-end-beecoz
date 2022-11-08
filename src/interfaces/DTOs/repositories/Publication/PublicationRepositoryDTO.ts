import { Publication } from "@prisma/client";

export interface PublicationRepositoryCreateDTO {
  data: Omit<Publication, "id" | "created_at" | "updated_at">;
}
export interface PublicationRepositoryReadDTO {
  id: number;
  clientId: number;
}
export interface PublicationRepositoryUpdateDTO {
  id: number;
  clientId: number;
  data: Omit<
    Publication,
    "id" | "created_at" | "updated_at" | "serviceTypeId" | "clientId" | "type"
  >;
}
export interface PublicationRepositoryDeleteDTO {
  id: number;
  clientId: number;
}

export interface PublicationRepositoryFindPublicationByIdDTO {
  id: number;
  clientId: number;
}

export interface PublicationRepositoryFindAllPublicationOnlyQueenOrIntermediateAutonomousDTO {
  servTypeId: number;
  level: 'Queen' | 'Intermediate'; 
}
export interface PublicationRepositoryFindAllPublicationOnlyBegginerAutonomousDTO {
  servTypeId: number;
}

