"use strict"

const AWS = require("aws-sdk")

const fetchItem = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const {id} = event.pathParameters

    let item

    try {
        const results = dynamodb.scan({
        TableName: "ItemTableNew",
        Key: {id}
        }).promise()

        item = results.Item       
    } catch (error) {
        
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item)
    }
}

module.exports = {
    handler: fetchItem
}