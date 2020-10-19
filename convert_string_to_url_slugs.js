function urlSlug(title) {
  return title[0] === " " ? 
  title.
  slice(1).
  toLowerCase().
  split(/\s+/).
  join("-") : 
      title.
      toLowerCase().
      split(/\s+/).
      join("-")
}
console.log(urlSlug("Winter Is Coming"))
console.log(urlSlug(" Winter Is   Coming")) 
