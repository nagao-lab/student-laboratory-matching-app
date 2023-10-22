// !!!重要!!! 
// このファイルで使用されるデータベースは、パーティションキーを下記設定で作成する必要があります

// 名前: sid
// 型: 文字列

// 作成の際は、AWSコンソールを用いるか、下記のコマンドを実行してください
// aws dynamodb create-table \
// --table-name <データベース名> \
// --attribute-definitions AttributeName=sid,AttributeType=S \
// --key-schema AttributeName=sid,KeyType=HASH \
// --billing-mode PAY_PER_REQUEST \
// --region <リージョン名>

import { DynamoDBClient, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";

const region = process.env.NEXT_PUBLIC_REGION as string;
const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY as string;
const db = process.env.NEXT_PUBLIC_DB_NAME as string;

const client = new DynamoDBClient({
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
});

export async function writePairToDynamoDB(sid: string, uid: string): Promise<void> {
    try {
        const command = new PutItemCommand({
            TableName: db,
            Item: {
                sid: { S: sid },
                uid: { S: uid },
            },
        });
        await client.send(command);
    } catch (error) {
        console.error(`Error writing pair to DynamoDB:`, error);
    }
}

// sidをキーにしてuidを取得する
export async function readUidFromDynamoDB(sid: string): Promise<string> {
    try {
        const command = new GetItemCommand({
            TableName: db,
            Key: {
                sid: { S: sid },
            },
        });
        const response = await client.send(command);
        if (response.Item) {
            const uid = response.Item.uid.S;
            return uid as string;
        } else {
            return "";
        }
    } catch (error) {
        console.error(`Error reading uid from DynamoDB:`, error);
        return "";
    }
}
