import json
import boto3
import random

def lambda_handler():
    s3 = boto3.resource('s3')
    myBucket = s3.Bucket("player-bb-reference-pages")
    bucketObjects = myBucket.objects.all()
    keys = []
    for obj in bucketObjects:
        keys.append(obj.key)
    randomKey = keys
    return {
        'statusCode': 200,
        'link': randomKey
    }

print(lambda_handler())