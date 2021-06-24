from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo
import config
import json
from facebook_scraper import get_posts
from datetime import datetime
import requests

app = Flask(__name__)
app.config["DEBUG"] = True

connection_url = 'mongodb+srv://{}:{}@cluster0.oz6gy.mongodb.net/test?retryWrites=true&w=majority'.format(config.username,config.password)
client = pymongo.MongoClient(connection_url)
Database = client.get_database('fb_posts')
#fb_housing_posts = Database.fb_housing_posts


@app.route('/add-housing-posts/', methods=['POST'])
def add_housing_posts():
    fb_housing_posts = Database.fb_housing_posts
    content = request.get_json()
    post_data = fb_housing_posts.insert(content)
    return "success"

@app.route('/add-processed-posts/', methods=['POST'])
def add_processed_posts():
    fb_processed_posts = Database.fb_processed_posts
    content = request.get_json()
    post_data = fb_processed_posts.insert(content)
    return "success"

@app.route('/get-unprocessed-posts/', methods=['GET'])
def get_posts():
    fb_unprocessed_posts = Database.fb_housing_posts
    output = []
    for post in fb_unprocessed_posts.find():
        data = {
                key:post[key] if post[key] is not None else -1000
                    for key in [
                        'post_id','time','listing_title','listing_price','listing_location','post_text', 
                        'username','images_lowquality','available','post_url'
                    ]
                }
        output.append(data)
    return jsonify({'result' : output})

if __name__ == '__main__':
    app.run()