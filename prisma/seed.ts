import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.consultation.deleteMany({})
  const createConsultation = await prisma.consultation.create({
    data: {
      title: "Annual Physical",
      description: "Annual physical exam for general health",
      healthcareProvider: "HealthPlus",
      consultationType: "OUTPATIENT",
      medicalCondition: "general",
      patient: "Emma Watson",
      officerId: "auth0|665418993a478dce1bb52ff9",
    },
  })

  const createConsultation2 = await prisma.consultation.create({
    data: {
      title: "Dental Checkup",
      description: "Routine dental checkup and cleaning",
      healthcareProvider: "Smile Care",
      consultationType: "OUTPATIENT",
      medicalCondition: "dental",
      patient: "John Doe",
      officerId: "auth0|665418993a478dce1bb52ff9",
    },
  })
}

main()
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect()
  })
