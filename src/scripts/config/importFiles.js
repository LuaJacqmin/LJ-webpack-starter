function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('src', true, /\.(html|php|png|jpe?g|gif|svg|wav|mp3|mp4|ogg|json|pdf|xml|webmanifest|ttf|otf|woff|woff2)$/));