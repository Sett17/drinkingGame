import os
import socketserver
import sys
import webbrowser
from http import server

from livereload import Server


def live():
    webbrowser.open('http://localhost:5500')

    ser = Server()
    ser.watch('../dev/')
    ser.setHeader('Access-Control-Allow-Origin', '*')
    ser.serve(root='../dev/')


def normal():
    Handler = server.SimpleHTTPRequestHandler
    web_dir = os.path.join(os.path.dirname(__file__), '../dev/')
    os.chdir(web_dir)
    webbrowser.open('http://localhost:8080')
    with socketserver.TCPServer(("", 8080), Handler) as httpd:
        print("serving at port", 8080)
        httpd.serve_forever()


if __name__ == "__main__":
    print("Only use in dev")
    if ('live' or 'l' or 'L') in sys.argv:
        live()
    else:
        normal()
