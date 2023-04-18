import { FeedbackRequestBD } from '../interfaces';

export class GetFeedbacks {
    constructor (
        private getFeedbacks: FeedbackRequestBD
    ){}
    
    async execute(){
        return await this.getFeedbacks.get()
    }
}