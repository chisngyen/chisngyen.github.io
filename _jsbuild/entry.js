// Rebuild assets/js/main.min.js (no plotly; the site has no charts):
//   cd _jsbuild && npm i jquery@3.7.1 fitvids@2.1.1 jquery-smooth-scroll@2.2.0 esbuild@0.24.0
//   npx esbuild entry.js --bundle --minify --format=esm --outfile=../assets/js/main.min.js
import './jq.js';
import fitvids from 'fitvids';
window.fitvids = fitvids;
import 'jquery-smooth-scroll';
import '../assets/js/plugins/jquery.greedy-navigation.js';
import '../assets/js/_main.js';
