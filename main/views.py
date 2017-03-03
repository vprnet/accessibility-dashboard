from main import app
from flask import render_template, request
from config import FREEZER_BASE_URL

@app.route('/')
def index():
    page_url = FREEZER_BASE_URL.rstrip('/') + request.path
    page_title = "Latest VPR Stories"

    return render_template('content.html',
        page_title=page_title,
        page_url=page_url)
