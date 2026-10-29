#!/bin/sh
set -eu

site_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if ! command -v python3 >/dev/null 2>&1; then
  printf '%s\n' 'Python 3 is required. Install Python 3, then run this script again.' >&2
  exit 1
fi
if [ ! -f "$site_dir/dist/index.html" ]; then
  printf '%s\n' 'Cannot find dist/index.html beside study.sh.' >&2
  exit 1
fi

exec python3 - "$site_dir/dist" "$@" <<'PY'
import argparse
import functools
import http.server
import sys
import webbrowser

directory = sys.argv[1]
parser = argparse.ArgumentParser(description='Run the COMP4703 study website locally.')
parser.add_argument('port', nargs='?', type=int, default=8000, help='local port (default: 8000)')
parser.add_argument('--no-browser', action='store_true', help='do not open a browser automatically')
args = parser.parse_args(sys.argv[2:])
if not 1 <= args.port <= 65535:
    parser.error('port must be between 1 and 65535')

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=directory)
try:
    server = http.server.ThreadingHTTPServer(('127.0.0.1', args.port), handler)
except OSError as error:
    print(f'Could not start on port {args.port}: {error}', file=sys.stderr)
    print('Try another port, for example: ./study.sh 8001', file=sys.stderr)
    sys.exit(1)

url = f'http://127.0.0.1:{server.server_port}/'
print(f'Study website: {url}', flush=True)
print('Press Ctrl+C to stop the server.', flush=True)
if not args.no_browser:
    try:
        if not webbrowser.open(url, new=2):
            print('Open the address above in your browser.', flush=True)
    except webbrowser.Error:
        print('Open the address above in your browser.', flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\nStudy website stopped.')
finally:
    server.server_close()
PY
