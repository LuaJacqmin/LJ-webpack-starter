function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('src', true, /\.(html|png|jpe?g|gif|svg|wav|mp3|mp4|ogg|json|pdf|xml|webmanifest)$/));