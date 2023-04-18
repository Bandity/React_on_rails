import { Feedback } from "@prisma/client";

export interface FeedbackRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
    
}

export interface FeedbackRequestBD {
    get: () => Promise<Feedback[]>
}