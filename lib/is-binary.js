const HEADER = new Uint8Array([66, 77, 70, 3]);

function bufferEqual(buf1, buf2) {
  if (buf1.byteLength !== buf2.byteLength) return false;
  for (let i = 0; i < buf1.byteLength; i++) {
    if (buf1[i] !== buf2[i]) return false;
  }
  return true;
}

module.exports = function(buf) {
  if (typeof buf === 'string')
    return buf.substring(0, 3) === 'BMF';
  
  if (buf instanceof ArrayBuffer) {
    buf = new Uint8Array(buf);
  }
  
  return buf.length > 4 && bufferEqual(buf.slice(0, 4), HEADER);
}
