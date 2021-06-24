from facebook_scraper import get_posts
from pprint import pprint
import requests
import json
from datetime import datetime
import config
import pymongo

connection_url = 'mongodb+srv://{}:{}@cluster0.oz6gy.mongodb.net/test?retryWrites=true&w=majority'.format(config.username,config.password)
client = pymongo.MongoClient(connection_url)
Database = client.get_database('fb_posts')
fb_housing_posts = Database.fb_housing_posts

latest = fb_housing_posts.find_one(sort=[( '_id', pymongo.DESCENDING )])

for post in get_posts(group=110354088989367, pages=2,timeout=60, options={"allow_extra_requests": False}):
    if post.get("listing_title"):
        if post['post_id'] != latest['post_id']
            insert_data = {
                    key:post[key] if post[key] is not None else -1000
                        for key in [
                            'post_id','time','listing_title','listing_price','listing_location','post_text', 
                            'username','images_lowquality','available','post_url'
                        ]
                    }
            
            insert_data['time'] = insert_data['time'].strftime("%m/%d/%Y")
            url = "http://localhost:5000/add-housing-posts/"
            post=requests.post(url, json = insert_data)