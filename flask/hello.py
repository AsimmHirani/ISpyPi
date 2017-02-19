from flask import Flask, send_from_directory, request, send_file
from subprocess import Popen, PIPE
##import ourfile

app = Flask(__name__)
 
@app.route("/")
def get_image():
    if request.args.get('n') == '1':
        filename = "neutral_face.jpeg"
    elif request.args.get('n') == '2':
       filename = 'bad_face.jpeg'
    elif request.args.get('n') == '3':
       filename = 'good_face.jpeg'
    elif request.args.get('n') == '4':
       filename = 'gameover_good.jpeg'
    elif request.args.get('n') == '5':
       filename = 'gameover_bad.jpeg'
    else:
        return "404: not found"
    return send_file(filename, mimetype='image/jpeg')

@app.route('/camera')
def read_c():
    cmd = "test.exe"
    p = Popen(cmd, stdout=PIPE)
    for line in p.stdout:
        return line

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

##@app.route('/get_image')
##def get_image():
##    if request.args.get('n') == '1':
##        filename = "neutral_face.jpeg"
##    elif request.args.get('n') == '2':
##       filename = 'bad_face.jpeg'
##    elif request.args.get('n') == '3':
##       filename = 'good_face.jpeg'
##    elif request.args.get('n') == '4':
##       filename = 'gameover_good.jpeg'
##    elif request.args.get('n') == '5':
##       filename = 'gameover_bad.jpeg'
##    else:
##        return "404: not found"
##    return send_file(filename, mimetype='image/jpeg')
##    
 
if __name__ == "__main__":
    app.run()
