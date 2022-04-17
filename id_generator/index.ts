function generateId(len: number = 10): string {
  var id = '0x';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < len; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

const aux = generateId();

console.log(`
{
  id: ${aux},
  typeof aux: ${typeof aux},
  aux.length: ${aux.length}
}
`);
