'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getClassrooms(){
    return await prisma.classroom.findMany()
}
