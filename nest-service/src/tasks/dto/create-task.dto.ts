export class CreateTaskDto {
    title: string;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
    order: number;
}
