// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import awsconfig from "../../aws-exports";
import AWS from "aws-sdk";

const Example = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("1");
  AWS.config.update({
    region: awsconfig.aws_dynamodb_table_schemas[0].region,
  });
  var dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
  console.log("2");
  var params = {
    TableName: awsconfig.aws_dynamodb_table_schemas[0].tableName,
  };
  console.log(`3 ${params}}`);
  const result = await dynamodb.scan(params).promise();
  console.log(`4 ${result}}`);
  res.status(200).json({ message: JSON.stringify(result) });
};
export default Example;
