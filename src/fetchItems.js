"use strict"

const AWS = require("aws-sdk")

const fetchItem = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let items

    try {
        const results = dynamodb.scan({
        TableName: "ItemTableNew"
        }).promise()

        items = results.Items        
    } catch (error) {
        
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}

module.exports = {
    handler: fetchItem
}