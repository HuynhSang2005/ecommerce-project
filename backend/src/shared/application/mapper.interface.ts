/**
 * Mapper Interface - Interface cho việc chuyển đổi giữa các layers
 * 
 * Các loại mappers:
 * 1. Domain <-> Persistence (Prisma models <-> Domain entities)
 * 2. Domain <-> Presentation (Domain entities <-> DTOs)
 * 
 * Nguyên tắc chính:
 * - Giữ các layers tách biệt (decoupled)
 * - Không đưa domain entities vào presentation layer
 * - Không đưa DTOs vào domain layer
 * - Không đưa Prisma models vào domain layer
 */
export interface IMapper<DomainEntity, PersistenceModel> {
  // TODO: Định nghĩa các phương thức mapper
  // toDomain(persistenceModel: PersistenceModel): DomainEntity;
  // toPersistence(domainEntity: DomainEntity): PersistenceModel;
}
