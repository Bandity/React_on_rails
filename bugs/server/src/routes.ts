import { NodemailerMailAdapter } from './repositories/adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository,PrismaFeedbacksRepositoryGet } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedback } from './services/submit-feedback';
import { GetFeedbacks } from './services/get-feedbacks';
import express from "express";

export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    //const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedback = new SubmitFeedback(
      prismaFeedbacksRepository,
      //nodemailerMailAdapter
    );

    await submitFeedback.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send({succes:1})
})

routes.get("/feedbacks", async(req,res)=>{
  const prismaFeedbacksRepository = new PrismaFeedbacksRepositoryGet();

  const getFeedbacks = new GetFeedbacks(prismaFeedbacksRepository)

  const result = await getFeedbacks.execute()

  return res.status(200).send({ success:1, result })
})