import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const region = process.env.NEXT_PUBLIC_REGION as string;
const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY as string;
const bucket = process.env.NEXT_PUBLIC_BUCKET_NAME as string;

const client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export async function uploadImage(file: File) {
  try {
    const key = `${Date.now()}-${file.name}`;
    await client.send(
      new PutObjectCommand({
        Body: file,
        Bucket: bucket,
        Key: key,
      })
    );
    return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
  } catch (error) {
    throw error;
  }
}
