// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import awsconfig from "../../aws-exports";
import AWS from "aws-sdk";

export default function handler(req, res) {
  console.log("1");
  AWS.config.update({
    region: awsconfig.aws_dynamodb_table_schemas[0].region,
  });

  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
  console.log("2");
  var params = {
    TableName: awsconfig.aws_dynamodb_table_schemas[0].tableName,
    Item: {
      note: { S: "Example" },
    },
  };
  console.log(`3 ${awsconfig.aws_dynamodb_table_schemas[0].tableName}}`);
  let result;
  ddb.putItem(params, function (err, data) {
    if (err) {
      result = err.message;
      console.log("Error", err);
    } else {
      result = "success";
      console.log("Success", data);
    }
  });
  console.log(`4 ${result}}`);
  res.status(200).json({ message: result });
}
