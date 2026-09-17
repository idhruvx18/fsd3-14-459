# CRUD
c->create,
r->retrieve,
u->update,
d->delete.
# File system of NodeJs
It allows JS code running outside the browser and interact directly to operating system
## Common operations on file/folder
- Reading and writing files -> readfile(),writefile(),appendfile()
- Directory management -> mkdir(),rmdir(),readdir()
- Metadata/information -> stat(),lstat(),fstat()
- Watching for changes -> watch(),watchfile(),unwatchfile()
- Streaming Large Files -> createReadStream(),createWriteStream()
- File Operations -> rename(),truncate(),unlink(),link(),systlink()

- await can be used with any promise in async function. That async function will also accessed by await 