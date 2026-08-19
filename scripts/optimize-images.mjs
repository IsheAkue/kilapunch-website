// Resizes and recompresses public/images source photos in place.
//
// Next.js image optimization is disabled (next.config.mjs sets
// images.unoptimized: true, required for `output: 'export'` static hosting
// on Cloudflare Pages) so nothing resizes these at request time — whatever
// ships here is exactly what every visitor downloads. Run this whenever a
// new photo is added to public/images.
import { readdir, stat, rename } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const TARGETS = [
  { dir: "public/images/industries", maxWidth: 1600, quality: 78 },
]

async function optimize(filePath, maxWidth, quality) {
  const before = (await stat(filePath)).size
  const buffer = await sharp(filePath)
    .rotate() // apply EXIF orientation, then strip metadata below
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer()

  const tmpPath = `${filePath}.tmp`
  await sharp(buffer).toFile(tmpPath)
  await rename(tmpPath, filePath)
  const after = (await stat(filePath)).size
  console.log(
    `${path.basename(filePath)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  )
}

for (const { dir, maxWidth, quality } of TARGETS) {
  const files = (await readdir(dir)).filter((f) => /\.(jpe?g)$/i.test(f))
  for (const file of files) {
    await optimize(path.join(dir, file), maxWidth, quality)
  }
}
