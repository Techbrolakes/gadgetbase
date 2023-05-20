export interface ApiResponse {
    success: boolean;
    code: number;
    message: string;
}

export interface INotification {
    type: 'success' | 'error';
    message: string;
    description?: string;
}
