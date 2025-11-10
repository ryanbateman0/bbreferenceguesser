import boto3
import random

s3 = boto3.resource('s3')
myBucket = s3.Bucket('player-bb-reference-pages')

allObjects = list(myBucket.objects.all())
randomBucketObject = allObjects[random.randint(0, len(allObjects)-1)]

object_url = f"https://{myBucket.name}.s3.amazonaws.com/{randomBucketObject.key}"
print(object_url)