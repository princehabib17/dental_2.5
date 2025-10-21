#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 5000
os.chdir('html')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Serving Arevalo Dental Clinic website at http://localhost:{PORT}")
    print("Visit the website to see the dental clinic homepage")
    sys.stdout.flush()
    httpd.serve_forever()