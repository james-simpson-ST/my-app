// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import awsconfig from "../../aws-exports";
import AWS from "aws-sdk";

export default function handler(req, res) {
  AWS.config.update({ region: awsconfig.aws_project_region });

  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

  var params = {
    TableName: "exampletable",
    Item: {
      note: { S: "Example" },
    },
  };
  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  res.status(200).json({ name: "John Doe" });
}
