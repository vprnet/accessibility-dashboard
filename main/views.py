from main import app
from query import api_feed
from flask import render_template, request
from config import FREEZER_BASE_URL

@app.route('/')
def index():
    tags = [427048436]
    page_url = FREEZER_BASE_URL.rstrip('/') + request.path
    page_title = "Latest VPR Stories"
    stories = api_feed(tags, numResults=10, thumbnail=True)


    return render_template('content.html',
        page_title=page_title,
        page_url=page_url,
        stories=stories)
