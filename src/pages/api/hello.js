// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import awsconfig from "../../aws-exports";
import AWS from "aws-sdk";

export default function handler(req, res) {
  console.log("1");
  AWS.config.update({
    region: awsconfig.aws_dynamodb_table_schemas[0].region,
  });
  var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  console.log("2");
  var params = {
    TableName: awsconfig.aws_dynamodb_table_schemas[0].tableName
  };
  console.log(`3 ${params}}`);
  const result = await dynamodb.scan(params).promise();
  console.log(`4 ${result}}`);
  res.status(200).json({ message: JSON.stringify(result) });
}
