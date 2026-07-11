import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { z } from 'zod'

const MemberRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  reason: z.string().trim().min(10).max(2000),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = MemberRequestSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid member request',
    })
  }

  const dataDir = join(process.cwd(), '.data')
  await mkdir(dataDir, { recursive: true })

  const record = {
    ...parsed.data,
    createdAt: new Date().toISOString(),
  }

  await appendFile(join(dataDir, 'member-requests.jsonl'), `${JSON.stringify(record)}\n`, {
    encoding: 'utf8',
  })

  return { ok: true }
})
