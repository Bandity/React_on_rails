import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbackRequestBD, FeedbacksRepository } from '../../interfaces';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    }
}

export class PrismaFeedbacksRepositoryGet implements FeedbackRequestBD {
    async get(){
        return await prisma.feedback.findMany()
    }
}