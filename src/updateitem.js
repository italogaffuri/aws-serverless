"use strict"

const AWS = require("aws-sdk")

const fetchItem = async (event) => {
    
    const {itemStatus} = event.pathParameters
    const {id} = event.pathParameters

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    await dynamodb.update({
        TableName: "ItemTableNew",
        Key: {id},
        UpdateExpression: "set itemStatus = :itemStatus",
        ExpressionAttributeValues: {
            ":itemStatus": itemStatus
        },
        returnvalues: "ALL_NEW"
    }).promise()
    
    return {
        statusCode: 200,
        body: JSON.stringify(
           {message: "Item updated"}
        ),
    };
}

module.exports = {
    handler: fetchItem
}