# !!!重要!!! データベースの要件

当libで使用されるDynamoDBデータベースは、パーティションキーを下記設定で作成する必要があります。
- 名前: sid
- 型: 文字列


作成の際は、AWSコンソールを用いるか、下記のコマンドを実行してください。
```
aws dynamodb create-table \
--table-name <データベース名> \
--attribute-definitions AttributeName=sid,AttributeType=S \
--key-schema AttributeName=sid,KeyType=HASH \
--billing-mode PAY_PER_REQUEST \
--region <リージョン名>
```
作成したデータベース名は環境変数NEXT_PUBLIC_DB_NAMEに、作成に使用したリージョン名は環境変数NEXT_PUBLIC_REGIONに、それぞれ格納してください。