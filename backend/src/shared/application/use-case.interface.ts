/**
 * Use Case Interface - Interface cơ sở cho tất cả các use cases
 * 
 * Tuân theo pattern CQRS:
 * - Commands: Thay đổi state (CreateProduct, UpdateInventory)
 * - Queries: Đọc state (GetProduct, ListProducts)
 * 
 * Nguyên tắc chính:
 * - Single Responsibility: Một use case = Một thao tác nghiệp vụ
 * - Điều phối logic domain và infrastructure
 * - Trả về DTOs, không trả về domain entities
 * 
 * @interface
 */
export interface IUseCase<TRequest, TResponse> {
  // TODO: Định nghĩa phương thức execute
  // execute(request: TRequest): Promise<TResponse>;
}

/**
 * Command Interface - Dành cho các thao tác thay đổi state
 */
export interface ICommand<TResponse = void> {
  // TODO: Định nghĩa command interface
  // Thường chỉ là marker interface hoặc có execute()
}

/**
 * Query Interface - Dành cho các thao tác chỉ đọc
 */
export interface IQuery<TResponse> {
  // TODO: Định nghĩa query interface
  // Thường chỉ là marker interface hoặc có execute()
}

/**
 * Command Handler Interface - Xử lý commands
 */
export interface ICommandHandler<TCommand extends ICommand<TResponse>, TResponse = void> {
  // TODO: Định nghĩa phương thức execute cho command handler
  // execute(command: TCommand): Promise<TResponse>;
}

/**
 * Query Handler Interface - Xử lý queries
 */
export interface IQueryHandler<TQuery extends IQuery<TResponse>, TResponse = void> {
  // TODO: Định nghĩa phương thức execute cho query handler
  // execute(query: TQuery): Promise<TResponse>;
}
